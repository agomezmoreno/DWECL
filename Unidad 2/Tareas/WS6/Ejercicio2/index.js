/**
 * Ejercicio 2
 */

// C
let imagenes = document.getElementsByTagName("img");

console.log("Numero de imágenes del documento: " + imagenes.length);

// D
let primeraImagen = document.getElementsByTagName("img")[0];

console.log("El ID de la primera imagen es: " + primeraImagen.id);
 

// E 
let enlaces = document.getElementsByTagName("a");

console.log("Numero de enlaces del documento: " + enlaces.length);


// F
document.title = "Nuevo titulo";

