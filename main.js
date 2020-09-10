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
    const titularNavbar = document.querySelector(".nav-empresa");

    const formContacto = document.querySelector("#form-contacto");
    const mensajeFormulario = document.querySelector(".mensaje-contacto");

    // const pantallaCarga = document.querySelector('.pantalla-carga');

    // setTimeout(()=>{

    //   // console.log('carga completa?');
    //   // pantallaCarga.classList.add('carga-completa')
    //   setTimeout(()=>{
    //     console.log('borrando pantalla del dom');
    //     pantallaCarga.remove();
    //   },1000);
    //   // pantallaCarga.remove();

    // },2000)

    formContacto.addEventListener("submit", (e) => {
      e.preventDefault();
      const formConstraints = {
        nombre: {
          presence: { allowEmpty: false, message: " no debe ir vacío" },
          length: {
            minimum: 2,
            tooShort: " debe tener al menos 2 caracteres",
            maximum: 30,
            tooLong: " debe tener como máximo 30 caracteres",
          },
        },
        email: {
          presence: {
            allowEmpty: false,
            message: " no debe ir vacío",
          },
          email: { message: " debe ser válido" },
        },
        mensaje: {
          presence: {
            allowEmpty: false,
            message: " no debe ir vácio",
          },
        },
      };

      const formValues = {
        nombre: formContacto.elements.nombre.value,
        email: formContacto.elements.email.value,
        mensaje: formContacto.elements.mensaje.value,
      };

      // var formBody = new FormData();
      // formBody.set("nombre", formContacto.elements.nombre.value);
      // formBody.set("email", formContacto.elements.email.value);
      // formBody.set("mensaje", formContacto.elements.mensaje.value);

      let errors = validate(formValues, formConstraints);
      //console.log(errors.nombre);

      if (!errors) {
        fetch("/form-contacto.php", {
          method: "POST",
          mode: "same-origin",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw "Error enviando la información";
            }
          })
          .then(function (res) {
            formContacto.elements.nombre.value = "";
            formContacto.elements.email.value = "";
            formContacto.elements.mensaje.value = "";


            mensajeFormulario.style.opacity = 1;
            mensajeFormulario.style.color = "black";
            mensajeFormulario.innerHTML = "Mensaje enviado exitosamente";

            setTimeout(() => {
              mensajeFormulario.style.opacity = 0;
              mensajeFormulario.innerHTML = "";
            }, 5000);
          })
          .catch(function (err) {
            mensajeFormulario.style.opacity = 1;
            mensajeFormulario.style.color = "red";
            mensajeFormulario.innerHTML = err;

            setTimeout(() => {
              mensajeFormulario.style.opacity = 0;
              mensajeFormulario.innerHTML = "";
            }, 5000);
          });
      } else {
        const listadoMensaje = [];
        //let errores = Object.values(errors);


        mensajeFormulario.style.opacity = 1;
        mensajeFormulario.style.color = "red";
        mensajeFormulario.innerHTML = errors;

        setTimeout(() => {
          mensajeFormulario.style.opacity = 0;
          mensajeFormulario.innerHTML = "";
        }, 5000);
      }
    });

    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset)
      if (window.pageYOffset >= navbarTop) {
        desktopNav.classList.add("sticky-navbar");
        titularNavbar.classList.add("nav-empresa-activo");
      } else {
        desktopNav.classList.remove("sticky-navbar");
        titularNavbar.classList.remove("nav-empresa-activo");
      }
    });

    let openedMenu = false;

    hamburgerBtn.addEventListener("click", () => {
      if (!openedMenu) {
        hamburgerNavbar.classList.add("open");
        openedMenu = true;
      } else {
        hamburgerNavbar.classList.remove("open");
        openedMenu = false;
      }
    });

    // Navigation Listeners

    cotizaYa.addEventListener("click", serviciosView);

    dkInicio.addEventListener("click", inicioView);
    dkServicios.addEventListener("click", serviciosView);
    dkProyectos.addEventListener("click", proyectosView);
    dkContacto.addEventListener("click", contactoView);

    mbInicio.addEventListener("click", inicioView);
    mbServicios.addEventListener("click", serviciosView);
    mbProyectos.addEventListener("click", proyectosView);
    mbContacto.addEventListener("click", contactoView);

    function inicioView(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
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

  });
})();
