/**
 * Ejercicio 7.
 */

let numero = parseInt(prompt("Introduce un número"));
let suma = 0;

for (let i = 1; i <= numero; i++) {
    suma += i;
}

document.write("La sumatoria es: " + suma);