/**
 * Ejercicio 4.
 */

let palabra;

do {
    palabra = prompt("Introduce una palabra, (Escribe SALIR para terminar)");
    document.write("<p>" + palabra);
} while (palabra!= "SALIR");