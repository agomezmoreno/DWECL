/**
 * Ejercicio 6
 */

let base = prompt("Introduce la base: ");
let exponente = prompt("Introduce el exponente");

function calcularPotencias(base, exponente) {
    if (exponente === 0) {
        return 1;
    } 
    else {
        return base * calcularPotencias(base, exponente - 1);
    }
}

document.write(calcularPotencias(base, exponente));
