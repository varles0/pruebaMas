const hamburgerBtn = document.querySelector(".hamburger-menu");
const hamburgerNavbar = document.querySelector(".hamburger-navbar");

//Mobile navigation
const mbInicio = document.querySelector('#mb-inicio');
const mbServicios = document.querySelector('#mb-servicios');
const mbProyectos = document.querySelector('#mb-proyectos');
const mbContacto = document.querySelector('#mb-contacto');

//desktop navigation
const dkInicio = document.querySelector('#dk-inicio');
const dkServicios = document.querySelector('#dk-servicios');
const dkProyectos = document.querySelector('#dk-proyectos');
const dkContacto = document.querySelector('#dk-contacto');




// const desktopNav = document.querySelector(".desktop-nav");
// const navbarTop = desktopNav.offsetTop;

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


// Navigation Listeners
dkInicio.addEventListener('click', inicioView )
dkServicios.addEventListener('click', serviciosView)
dkProyectos.addEventListener('click', proyectosView)
dkInicio.addEventListener('click', contactoView)

mbInicio.addEventListener('click', inicioView)
mbServicios.addEventListener('click', serviciosView)
mbProyectos.addEventListener('click', proyectosView)
mbContacto.addEventListener('click', contactoView)








function inicioView(e) {
  e.preventDefault();
  document.querySelector("#inicio").scrollIntoView({
    behavior: "smooth",
  });
}



function serviciosView(e) {
  e.preventDefault();
  document.querySelector("#servicios").scrollIntoView({
    behavior: "smooth",
  });
}
function proyectosView(e) {
  e.preventDefault();
  document.querySelector("#proyectos").scrollIntoView({
    behavior: "smooth",
  });
}

function contactoView(e) {
  console.log('asd')
  e.preventDefault();
  document.querySelector("#contacto").scrollIntoView({
    behavior: "smooth",
  });
}
