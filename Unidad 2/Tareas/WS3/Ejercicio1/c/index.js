/**
 * Ejercicio 1 (c)
 */

let cadena = prompt("Introduce una frase");

function encuentraPalabraMasLarga(cad_arg) {
    let palabras = cad_arg.split(" ");
    let larga = palabras[0];

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > contador) {
            larga = palabras[i];
        }
    }

    return larga;
}

document.write(encuentraPalabraMasLarga(cadena));