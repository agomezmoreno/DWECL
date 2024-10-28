/**
 * Ejercicio 1 (d)
 */

let cadena = prompt("Introduce una frase: ");
let numero = parseInt(prompt("Número que deseas buscar: "));

function filtraPalabraMasLargas(cad_arg, i) {
    let palabras = cad_arg.split(" ");
    let numero = 0;

    for (let j = 0; j < palabras.length; j++) {
        if (palabras[j].length > i) {
            numero++;
        }
    }
    
    return numero;
}

document.write(filtraPalabraMasLargas(cadena, numero));
