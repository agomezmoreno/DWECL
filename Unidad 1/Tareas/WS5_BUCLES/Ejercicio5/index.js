/**
 * Ejercicio 5.
 */

let suma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Introduce el numero " + i));
    suma += numero;
}

document.write(suma);
