const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const cancelMenu = document.querySelector(".menu-cancel");

hamburger.addEventListener("click", () => {
  navMenu.style.left = "0%";
});

cancelMenu.addEventListener("click", () => {
  navMenu.style.left = "-100%";
});
