/**
 * Ejercicio 3.
 */

let edad = prompt("Introduce tu edad");

if (edad < 5) {
    document.write("Debes estar en el jardín de infancia");
} else if (edad >= 6 && edad <= 11) {
    document.write("Debes estar en primaria");
} else if (edad >= 12 && edad <= 16) {
    document.write("Debes estar en la ESO");
} else if (edad >= 17 && edad <= 21) {
    document.write("Debes estar en bachillerato");
} else {
    document.write("Debes estar en la universidad");
}