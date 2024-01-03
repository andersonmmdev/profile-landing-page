const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
