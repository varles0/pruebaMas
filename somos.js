const hamburgerBtn = document.querySelector(".hamburger-menu");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");


let openedMenu = false;


const desktopNav = document.querySelector(".desktop-nav");
const navbarTop = desktopNav.offsetTop;
const titularNavbar = document.querySelector('.nav-empresa');


window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset)
  if (window.pageYOffset >= navbarTop) {
    desktopNav.classList.add("sticky-navbar");
    titularNavbar.classList.add("nav-empresa-activo")
  } else {
    desktopNav.classList.remove("sticky-navbar");
    titularNavbar.classList.remove("nav-empresa-activo")
  }
});

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

