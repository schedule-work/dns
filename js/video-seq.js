/**
 * 고려대학교 구로병원 간호부 - 커뮤니티 영상 순차 자동재생 스크립트
 *
 * 주요 기능:
 * 1. 페이지 진입 시 좌측 첫 번째 영상부터 무음(Muted)으로 자동 재생 시작
 * 2. 재생 중이 아닌 다른 모든 영상 카드는 선명한 유튜브 썸네일과 재생 버튼을 상시 노출
 * 3. 각 카드 우측 상단의 소리 켜기/끄기 토글로 현재 재생 중인 영상의 음소거를 해제할 수 있음
 * 4. 카드 또는 썸네일 직접 클릭 시 해당 영상으로 즉시 포커스 이동 및 재생
 * 5. 영상 재생 종료 시 다음 영상으로 자동 순차 전환(수동 이전/다음 버튼 없이 자동으로만 진행)
 */

(function () {
  let currentActiveIndex = 0;
  let isMutedState = true;
  let cards = [];
  let videoData = [];

  function initCommunityVideos() {
    cards = Array.from(document.querySelectorAll(".video-seq-card"));
    if (!cards.length) return;

    videoData = cards.map((card, idx) => {
      const container = card.querySelector(".video-player-container");
      let slot = card.querySelector(".video-player-slot");
      if (!slot && container) {
        slot = document.createElement("div");
        slot.className = "video-player-slot";
        container.appendChild(slot);
      }

      return {
        index: idx,
        id: card.getAttribute("data-video-id"),
        title: card.querySelector(".title") ? card.querySelector(".title").textContent.trim() : `영상 ${idx + 1}`,
        cardEl: card,
        containerEl: container,
        slotEl: slot
      };
    });

    setupCardInteractions();
    setupMessageListener();

    // 초기 상태: 인덱스 0(좌측 영상) 무음 자동 재생 시작
    playVideoAtIndex(0);
  }

  function setupCardInteractions() {
    cards.forEach((card, idx) => {
      card.addEventListener("click", function (e) {
        if (e.target.closest(".external-yt-link") || e.target.closest(".btn-audio-toggle")) {
          return;
        }
        if (currentActiveIndex !== idx) {
          playVideoAtIndex(idx);
        }
      });

      const cardAudioBtn = card.querySelector(".btn-audio-toggle");
      if (cardAudioBtn) {
        cardAudioBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          toggleAudio();
        });
      }
    });
  }

  function postYT(iframe, func, args) {
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: "command",
        func: func,
        args: args || []
      }), "*");
    } catch (e) {}
  }

  function playVideoAtIndex(index) {
    if (index < 0 || index >= videoData.length) return;
    const prevIndex = currentActiveIndex;
    currentActiveIndex = index;

    // 1. 이전 활성 영상 일시정지
    if (prevIndex !== index && videoData[prevIndex]) {
      const prevData = videoData[prevIndex];
      const prevIframe = prevData.slotEl ? prevData.slotEl.querySelector("iframe") : null;
      if (prevIframe) {
        postYT(prevIframe, "pauseVideo");
      }
    }

    // 2. 카드 클래스 토글 (is-active vs is-waiting)
    cards.forEach((card, idx) => {
      const isActive = idx === index;
      card.classList.toggle("is-active", isActive);
      card.classList.toggle("is-waiting", !isActive);
    });

    // 3. 대상 영상 슬롯에 iframe 마운트 및 재생
    const targetData = videoData[index];
    if (targetData && targetData.slotEl) {
      let iframe = targetData.slotEl.querySelector("iframe");
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = `yt-iframe-${index}`;
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("title", targetData.title);
        iframe.src = `https://www.youtube-nocookie.com/embed/${targetData.id}?autoplay=1&mute=${isMutedState ? 1 : 0}&enablejsapi=1&rel=0&playsinline=1`;
        targetData.slotEl.appendChild(iframe);
      } else {
        if (isMutedState) {
          postYT(iframe, "mute");
        } else {
          postYT(iframe, "unMute");
          postYT(iframe, "setVolume", [100]);
        }
        postYT(iframe, "playVideo");
      }
    }

    updateAudioButtonsUI();
  }

  function toggleAudio() {
    isMutedState = !isMutedState;
    const activeData = videoData[currentActiveIndex];
    if (activeData && activeData.slotEl) {
      const iframe = activeData.slotEl.querySelector("iframe");
      if (iframe) {
        if (isMutedState) {
          postYT(iframe, "mute");
        } else {
          postYT(iframe, "unMute");
          postYT(iframe, "setVolume", [100]);
        }
      }
    }
    updateAudioButtonsUI();
  }

  function updateAudioButtonsUI() {
    const audioBtns = document.querySelectorAll(".btn-audio-toggle");
    audioBtns.forEach(btn => {
      const iconEl = btn.querySelector(".audio-icon");
      const labelEl = btn.querySelector(".audio-text");

      if (isMutedState) {
        if (iconEl) iconEl.textContent = "🔇";
        if (labelEl) labelEl.textContent = "소리 켜기";
        btn.classList.remove("sound-active");
        btn.classList.add("sound-muted");
        btn.setAttribute("aria-label", "소리 켜기");
      } else {
        if (iconEl) iconEl.textContent = "🔊";
        if (labelEl) labelEl.textContent = "소리 끄기";
        btn.classList.remove("sound-muted");
        btn.classList.add("sound-active");
        btn.setAttribute("aria-label", "소리 끄기");
      }
    });
  }

  function setupMessageListener() {
    window.addEventListener("message", function (event) {
      if (!event.data) return;
      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
          return;
        }
      }
      if (!data) return;

      let state = null;
      if (data.event === "onStateChange" && typeof data.info !== "undefined") {
        state = data.info;
      } else if (data.event === "infoDelivery" && data.info && typeof data.info.playerState !== "undefined") {
        state = data.info.playerState;
      }

      if (state === 0) {
        // 영상 종료 시 다음 영상으로 자동 순차 재생
        const nextIdx = (currentActiveIndex + 1) % videoData.length;
        playVideoAtIndex(nextIdx);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCommunityVideos);
  } else {
    initCommunityVideos();
  }
})();
