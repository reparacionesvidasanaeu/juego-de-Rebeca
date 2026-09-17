let gemas = 0;
let tiempo;
let segundosRestantes = 15;
const pantalla = document.getElementById("pantalla-juego");
const contadorGemas = document.getElementById("gemas-count");

function actualizarGemas() {
    gemas++;
    contadorGemas.innerText = gemas;
}

function respuestaIncorrecta() {
    alert("¡Inténtalo otra vez! Recuerda lo que necesitan la naturaleza y las plantas. 🌸");
}