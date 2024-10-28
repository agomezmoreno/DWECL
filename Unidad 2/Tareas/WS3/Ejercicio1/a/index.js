/**
 * Ejercicio 1 (a)
 */

let cadena = prompt("Introduce una frase");

function invierteCadena(cad_arg) {
    let cadenaInvertida = "";

    for (let i = cad_arg.length - 1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i];
    }
    
    return cadenaInvertida;
}

document.write(invierteCadena(cadena));


