document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const gnb = document.querySelector(".gnb");

  if (navToggle && gnb) {
    navToggle.addEventListener("click", () => {
      gnb.classList.toggle("open");
    });

    gnb.querySelectorAll(":scope > li > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const parent = link.parentElement;
        if (parent.querySelector(".submenu") && window.matchMedia("(max-width: 960px)").matches) {
          e.preventDefault();
          parent.classList.toggle("open");
        }
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  initInlineVideos();
  initBlurText();
});

function initInlineVideos() {
  document.querySelectorAll("[data-yt-id]").forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "영상 재생");

    const play = () => {
      const id = card.dataset.ytId;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      );
      iframe.setAttribute("allowfullscreen", "");
      iframe.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0;";
      card.innerHTML = "";
      card.appendChild(iframe);
    };

    card.addEventListener("click", play, { once: true });
    card.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          play();
        }
      },
      { once: true }
    );
  });
}

function initBlurText() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-blur-text]").forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "blur-word";
      span.textContent = word;
      if (prefersReduced) {
        span.style.animation = "none";
        span.style.opacity = "1";
        span.style.filter = "none";
        span.style.transform = "none";
      } else {
        span.style.animationDelay = `${i * 0.2}s`;
      }
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  });
}
