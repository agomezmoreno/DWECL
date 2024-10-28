/**
 *  Ejercicio1.
 */

// Número aleatorio entre 0 y 1
let numAleatorio = Math.floor(Math.random() * 1);
document.write("<b> Número aleatorio entre 0 y 1: </b>" + numAleatorio);
document.write("<br>");


// Número aleatorio entre 100 y 200
let numAleatorio2 = Math.floor(Math.random() * (200 - 100 + 1) + 100);
document.write("<b> Número aleatorio entre 100 y 200: </b>" + numAleatorio2);
document.write("<br>");


// Número aleatorio entre dos valores introducidos por el usuario
let minNumero = parseInt(prompt("Introduce el mínimo número"));
let maxNumero = parseInt(prompt("Introduce el máximo número"));

let numAleatorio3 = Math.floor(Math.random() * (maxNumero - minNumero + 1) + minNumero);
document.write("<b> Número aleatorio entre dos valores introducidos: </b>" + numAleatorio3);
