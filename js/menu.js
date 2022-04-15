const btnNav = document.querySelector(".mobile-nav");
const nav = document.querySelector(".navbar");

btnNav.addEventListener("click", function () {
  nav.classList.toggle("open-nav");
});