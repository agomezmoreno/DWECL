/**
 * Ejercicio 2
 */

let cadena = prompt("Introduce una frase");

function informacionCadena(cad_arg) {
    
    if (cad_arg === cad_arg.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cad_arg === cad_arg.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena contiene una mezcla de mayúsculas y minúsculas.";
    }
}



document.write(informacionCadena(cadena));