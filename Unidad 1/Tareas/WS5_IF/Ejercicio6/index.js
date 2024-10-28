/**
 * Ejercicio 6.
 */

let lugarResidencia = prompt("Introduce tu lugar de residencia");
let edad = prompt("Introduce tu edad");

if (edad >= 18 && edad <= 30 && lugarResidencia === "Madrid") {
    document.write("Puedes acceder al carnet de empresarios emprendedores");
}