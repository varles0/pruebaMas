const hamburgerBtn = document.querySelector(".hamburger-menu");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");


let openedMenu = false;

hamburgerBtn.addEventListener("click", () => {
  if (!openedMenu) {
    hamburgerNavbar.classList.add("open");
    // hamburgerNavbar.style.animation='open-hamburger 0.5 ease-in';
    openedMenu = true;
  } else {
    hamburgerNavbar.classList.remove("open");
    openedMenu = false;
  }
});