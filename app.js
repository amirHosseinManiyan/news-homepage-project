let menuOpen = document.getElementById("menu-open");
let menuClose = document.getElementById("menu-close");
let overlay = document.querySelector(".overlay");
let menu = document.getElementById("nav");

menuOpen.addEventListener("click", function() {
   menu.classList.add("active-menu");
   overlay.classList.add("active-overlay");
   document.body.classList.add("body-active-menu");
});

menuClose.addEventListener("click", function() {
   menu.classList.remove("active-menu");
   overlay.classList.remove("active-overlay");
   document.body.classList.remove("body-active-menu");
});

overlay.addEventListener("click", function() {
   menu.classList.remove("active-menu");
   overlay.classList.remove("active-overlay");
   document.body.classList.remove("body-active-menu");
});