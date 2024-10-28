/**
 * Ejercicio 3.
 */

let cadena = prompt("Introduce una frase: ");


function esPolindromo(cad_arg) {
    let esPolindromo = true;

    let cadenaLimpia = cad_arg.split(' ').join('').toLowerCase();

    for (let i = 0; i < cadenaLimpia.length; i++) {
        if (cadenaLimpia[i] !== cadenaLimpia[cadenaLimpia.length - 1 - i]) {
            esPolindromo = false;
        }
    }

    return esPolindromo;
}


document.write(esPolindromo(cadena) ? "Es un palíndromo" : "No es un palíndromo");
