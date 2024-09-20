import { cargarDatos } from "./componentes/datos.js";
import { cambiarTarjeta } from "./componentes/carousel.js";

// Datos externos
window.addEventListener('DOMContentLoaded', ev => {
    cargarDatos()
    setTimeout(cambiarTarjeta, 300);
});
