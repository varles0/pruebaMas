const hamburgerBtn = document.querySelector(".hamburger-menu");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");


let openedMenu = false;


const desktopNav = document.querySelector(".desktop-nav");
const navbarTop = desktopNav.offsetTop;


window.addEventListener('scroll', ()=>{

  if (window.pageYOffset >= navbarTop) {
    desktopNav.classList.add("sticky-navbar")
  } else {
    desktopNav.classList.remove("sticky-navbar");
  }

})

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

