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
});
