/**
 * Ejercicio 1 (e)
 */

let cadena = prompt("Introduce una frase");

function cadenaBienFormada(cad_arg) {
    cad_arg = cad_arg.toLowerCase();
    let primeraLetra = cad_arg.charAt(0).toUpperCase();
    let cadenaFormateada = primeraLetra;

    for (let i = 1; i < cad_arg.length; i++) {
        cadenaFormateada += cad_arg.charAt(i);
    }

    return cadenaFormateada;
}

document.write(cadenaBienFormada(cadena));

