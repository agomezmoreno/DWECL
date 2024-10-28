/**
 * Ejercicio 8.
 */

const imagenes = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];

let aleatorioImg = Math.floor(Math.random() * imagenes.length);

document.write('<img src="' + imagenes[aleatorioImg] + '">');

