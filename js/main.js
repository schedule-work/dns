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

  initBlurText();
  initCalendar();
});

// 대한민국 공휴일 (고정 + 음력 기반 연도별 환산일). 2027년 이후 음력 환산일은 추후 확정치로 갱신 필요.
const KR_HOLIDAYS = {
  "2024-01-01": "신정",
  "2024-02-09": "설날 연휴", "2024-02-10": "설날", "2024-02-11": "설날 연휴", "2024-02-12": "대체공휴일",
  "2024-03-01": "삼일절",
  "2024-05-05": "어린이날", "2024-05-15": "부처님오신날",
  "2024-06-06": "현충일",
  "2024-08-15": "광복절",
  "2024-09-16": "추석 연휴", "2024-09-17": "추석", "2024-09-18": "추석 연휴",
  "2024-10-03": "개천절", "2024-10-09": "한글날",
  "2024-12-25": "성탄절",

  "2025-01-01": "신정",
  "2025-01-28": "설날 연휴", "2025-01-29": "설날", "2025-01-30": "설날 연휴",
  "2025-03-01": "삼일절", "2025-03-03": "대체공휴일",
  "2025-05-05": "어린이날·부처님오신날", "2025-05-06": "대체공휴일",
  "2025-06-06": "현충일",
  "2025-08-15": "광복절",
  "2025-10-03": "개천절",
  "2025-10-05": "추석 연휴", "2025-10-06": "추석", "2025-10-07": "추석 연휴", "2025-10-08": "대체공휴일",
  "2025-10-09": "한글날",
  "2025-12-25": "성탄절",

  "2026-01-01": "신정",
  "2026-02-16": "설날 연휴", "2026-02-17": "설날", "2026-02-18": "설날 연휴",
  "2026-03-01": "삼일절", "2026-03-02": "대체공휴일",
  "2026-05-05": "어린이날",
  "2026-05-24": "부처님오신날", "2026-05-25": "대체공휴일",
  "2026-06-06": "현충일",
  "2026-08-15": "광복절",
  "2026-09-24": "추석 연휴", "2026-09-25": "추석", "2026-09-26": "추석 연휴",
  "2026-10-03": "개천절",
  "2026-10-09": "한글날",
  "2026-12-25": "성탄절",

  "2027-01-01": "신정",
  "2027-02-06": "설날 연휴", "2027-02-07": "설날", "2027-02-08": "설날 연휴", "2027-02-09": "대체공휴일",
  "2027-03-01": "삼일절",
  "2027-05-05": "어린이날",
  "2027-05-13": "부처님오신날",
  "2027-06-06": "현충일", "2027-06-07": "대체공휴일",
  "2027-08-15": "광복절", "2027-08-16": "대체공휴일",
  "2027-09-14": "추석 연휴", "2027-09-15": "추석", "2027-09-16": "추석 연휴",
  "2027-10-03": "개천절", "2027-10-04": "대체공휴일",
  "2027-10-09": "한글날",
  "2027-12-25": "성탄절",
};

function initCalendar() {
  const grid = document.getElementById("mini-calendar");
  const titleEl = document.getElementById("cal-title");
  if (!grid) return;

  const cursor = new Date();
  cursor.setDate(1);

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render() {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const firstDow = new Date(y, m, 1).getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

    const dows = ["일", "월", "화", "수", "목", "금", "토"];
    let html = dows
      .map((d, i) => `<span class="dow${i === 0 ? " sun" : i === 6 ? " sat" : ""}">${d}</span>`)
      .join("");

    for (let i = 0; i < firstDow; i++) html += "<span></span>";

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${y}-${pad(m + 1)}-${pad(d)}`;
      const dow = new Date(y, m, d).getDay();
      const holiday = KR_HOLIDAYS[dateStr];
      const classes = [];
      if (dow === 0 || holiday) classes.push("sun");
      if (dow === 6) classes.push("sat");
      if (holiday) classes.push("holiday");
      if (dateStr === todayStr) classes.push("today");
      const title = holiday ? ` title="${holiday}"` : "";
      html += `<span class="${classes.join(" ")}"${title}>${d}</span>`;
    }

    grid.innerHTML = html;
    if (titleEl) titleEl.textContent = `${y}년 ${m + 1}월`;
  }

  document.querySelectorAll(".cal-nav").forEach((btn) => {
    btn.addEventListener("click", () => {
      cursor.setMonth(cursor.getMonth() + parseInt(btn.dataset.dir, 10));
      render();
    });
  });

  render();
}

function initBlurText() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-blur-text]").forEach((el) => {
    const chars = Array.from(el.textContent.trim());
    el.textContent = "";
    chars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "blur-word";
      span.textContent = ch === " " ? " " : ch;
      if (prefersReduced) {
        span.style.animation = "none";
        span.style.opacity = "1";
        span.style.filter = "none";
        span.style.transform = "none";
      } else {
        span.style.animationDelay = `${i * 0.13}s`;
      }
      el.appendChild(span);
    });
  });
}
