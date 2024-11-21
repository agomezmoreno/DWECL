// Elementos del DOM
const contenedorBotones = document.getElementById("alphabetButtons");
const pantallaRespuesta = document.getElementById("hold");
const pantallaVidas = document.getElementById("mylives");
const botonPista = document.getElementById("hint");
const botonReiniciar = document.getElementById("reset");

let respuesta = "";
let pista = "";
let vidas = 10;
let pantallaPalabra = [];
let verificacionVictoria = "";

// Categorías y pistas
const categorias = [
  ["everton", "liverpool", "chelsea"],
  ["alien", "gladiator", "jaws"],
  ["manchester", "madrid", "prague"]
];

const pistas = [
  ["Basado en Mersyside", "Basado en Mersyside", "Propiedad de un multimillonario ruso"],
  ["Ciencia ficción y terror", "Película de acción", "Película de tiburones"],
  ["Ciudad del norte de UK", "Ciudad italiana", "Capital española"]
];

// Generar botones del abecedario
function generarBotones() {
  let botonesHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(letra => `<button class="alphabetButton" id="${letra}">${letra}</button>`)
    .join("");
  contenedorBotones.innerHTML = botonesHTML;
}

// Iniciar juego
function iniciarJuego() {
  vidas = 10;
  const indiceCategoria = Math.floor(Math.random() * categorias.length);
  const indicePalabra = Math.floor(Math.random() * categorias[indiceCategoria].length);

  respuesta = categorias[indiceCategoria][indicePalabra];
  pista = pistas[indiceCategoria][indicePalabra];
  pantallaPalabra = Array(respuesta.length).fill("_");
  pantallaRespuesta.innerHTML = pantallaPalabra.join(" ");
  pantallaVidas.innerHTML = `Vidas: ${vidas}`;
  generarBotones();
  contenedorBotones.addEventListener("click", manejarAdivinanza);
  botonPista.addEventListener("click", mostrarPista);
}

// Manejar clic en las letras
function manejarAdivinanza(evento) {
  if (evento.target.tagName === "BUTTON") {
    const letraAdivinada = evento.target.id;
    evento.target.disabled = true;

    let encontrado = false;
    for (let i = 0; i < respuesta.length; i++) {
      if (respuesta[i] === letraAdivinada) {
        pantallaPalabra[i] = letraAdivinada;
        encontrado = true;
      }
    }

    if (!encontrado) {
      vidas--;
      if (vidas === 0) {
        pantallaVidas.innerHTML = "¡Game Over!";
        return;
      }
    }

    verificacionVictoria = pantallaPalabra.join("");
    pantallaRespuesta.innerHTML = pantallaPalabra.join(" ");
    pantallaVidas.innerHTML = `Vidas: ${vidas}`;

    if (verificacionVictoria === respuesta) {
      pantallaVidas.innerHTML = "You win!";
    }
  }
}

// Mostrar pista
function mostrarPista() {
  alert(`Pista: ${pista}`);
}

// Reiniciar juego
botonReiniciar.addEventListener("click", iniciarJuego);

// Iniciar juego cuando se carga la página
window.onload = iniciarJuego;
