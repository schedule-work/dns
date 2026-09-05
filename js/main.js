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
});

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
        span.style.animationDelay = `${i * 0.4}s`;
      }
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  });
}
