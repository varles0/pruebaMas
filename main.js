(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-menu");
    const hamburgerNavbar = document.querySelector(".hamburger-navbar");
    const cotizaYa = document.querySelector("#cotizaya");
    //Mobile navigation
    const mbInicio = document.querySelector("#mb-inicio");
    const mbServicios = document.querySelector("#mb-servicios");
    const mbProyectos = document.querySelector("#mb-proyectos");
    const mbContacto = document.querySelector("#mb-contacto");

    //desktop navigation
    const dkInicio = document.querySelector("#dk-inicio");
    const dkServicios = document.querySelector("#dk-servicios");
    const dkProyectos = document.querySelector("#dk-proyectos");
    const dkContacto = document.querySelector("#dk-contacto");

    const desktopNav = document.querySelector(".desktop-nav");
    const navbarTop = desktopNav.offsetTop;


    const iconoBajar = document.querySelector('.icono-bajar');
    const pantallaCarga = document.querySelector('.pantalla-carga');

    setTimeout(()=>{

      console.log('carga completa?');
      pantallaCarga.classList.add('carga-completa')
      setTimeout(()=>{
        console.log('borrando pantalla del dom');
        pantallaCarga.remove();
      },1000);
      // pantallaCarga.remove();
      


    },2000)





    window.addEventListener('scroll', ()=>{
      console.log(window.pageYOffset)
      if (window.pageYOffset >= navbarTop) {
        desktopNav.classList.add("sticky-navbar")
      } else {
        desktopNav.classList.remove("sticky-navbar");
      }
      if(window.pageYOffset>0){

        iconoBajar.style.display = "none";

      }else
      {

        iconoBajar.style.display = "inline";
      }

    })








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

    cotizaYa.addEventListener("click", serviciosView);
    // Navigation Listeners
    dkInicio.addEventListener("click", inicioView);
    dkServicios.addEventListener("click", serviciosView);
    dkProyectos.addEventListener("click", proyectosView);
    // dkInicio.addEventListener("click", contactoView);
    dkContacto.addEventListener("click", contactoView);

    mbInicio.addEventListener("click", inicioView);
    mbServicios.addEventListener("click", serviciosView);
    mbProyectos.addEventListener("click", proyectosView);
    mbContacto.addEventListener("click", contactoView);

    function inicioView(e) {
      e.preventDefault();
      // document.querySelector(".desktop-header").scrollIntoView({
      //   behavior: "smooth",
      // });
      window.scrollTo({top:0, behavior: 'smooth'});
      
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
      e.preventDefault();
      document.querySelector("#contacto").scrollIntoView({
        behavior: "smooth",
      });
    }
    function cotitizarya(e) {
      e.preventDefault();
      document.querySelector("#servicios").scrollIntoView({
        behavior: "smooth",
      });
    }

    // document.getElementById("link-contacto").addEventListener("click", (e) => {
    //   e.preventDefault();
    //   document.getElementById("contacto").scrollIntoView({
    //     behavior: "smooth",
    //   });
    // });

    const formConstraints = {
      name: { presence: { allowEmpty: false } },
      email: { presence: { allowEmpty: false }, email: true },
      message: { presence: { allowEmpty: false } },
    };
  });
})();
