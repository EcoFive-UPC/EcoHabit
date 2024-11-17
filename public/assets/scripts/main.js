
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

