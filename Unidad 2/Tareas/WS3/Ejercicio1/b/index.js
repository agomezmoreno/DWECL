/**
 * Ejercicio 1 (b)
 */

let cadena = prompt("Introduce una frase:");

function invierteCadena(cad_arg) {
    let cadenaInvertida = "";

    for (let i = cad_arg.length - 1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i];
    }
    
    return cadenaInvertida;
}

function inviertePalabras(cad_arg) {
    let palabras = cad_arg.split(" ");
    let resultado = "";

    for (let i = 0; palabras.length; i++) {
        resultado += invierteCadena(palabras[i])+" ";
    }

    return resultado;
}

document.write(inviertePalabras(cadena));


