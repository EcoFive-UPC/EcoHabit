
/*Inicio*/
const inicio = document.querySelector("#inicio")

inicio.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionI = document.querySelector(".banner");
    sectionI.scrollIntoView({behavior:"smooth"});
})

/*Servicios*/
const services = document.querySelector("#servicios")

services.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".servicios");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*Quienes Somos*/
const nosotros = document.querySelector("#nosotros")

nosotros.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionN = document.querySelector(".nosotros");
    sectionN.scrollIntoView({behavior:"smooth"});
})

/*Contacto*/
const contacto = document.querySelector("#contacto")

contacto.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionC = document.querySelector(".contacto");
    sectionC.scrollIntoView({behavior:"smooth"});
})

/*Descarga*/
const descarga = document.querySelector("#descargar")

descarga.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionD = document.querySelector(".fila_2");
    sectionD.scrollIntoView({behavior:"smooth"});
})

/*Register y Login*/
var registroModal = document.getElementById("registro_modal");
var loginModal = document.getElementById("login_contenedor");

var registroBtn = document.getElementById("registrarse");
var loginLink = document.getElementById("iniciar_sesion");

var cerrarRegistro = document.getElementsByClassName("cerrar")[0];
var cerrarLogin = document.getElementsByClassName("cerrar_login")[0];

registroBtn.onclick = function () {
    registroModal.classList.add("active");
};

loginLink.onclick = function (event) {
    event.preventDefault(); // Prevenir la navegación del enlace
    registroModal.classList.remove("active"); // Ocultar el modal de registro
    loginModal.classList.add("active"); // Mostrar el modal de login
};

cerrarRegistro.onclick = function () {
    registroModal.classList.remove("active");
};

cerrarLogin.onclick = function () {
    loginModal.classList.remove("active");
};

window.onclick = function (event) {
    if (event.target == registroModal) {
        registroModal.classList.remove("active");
    } else if (event.target == loginModal) {
        loginModal.classList.remove("active");
    }
};

/*Para la barra de navegación en dispositivos pequeños*/
function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("active");
}




