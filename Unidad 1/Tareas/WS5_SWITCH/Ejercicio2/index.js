/**
 * Ejercicio 2.
 */

let numero = parseInt(prompt("Introduce un númer: o"));

switch (true) {
    case (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0):
        document.write("El número es par, múltiplo de 3 y múltiplo de 5.");
        break;
    case (numero % 2 === 0 && numero % 3 === 0):
        document.write("El número es par y múltiplo de 3.");
        break;
    case (numero % 2 === 0 && numero % 5 === 0):
        document.write("El número es par y múltiplo de 5.");
        break;
    case (numero % 3 === 0 && numero % 5 === 0):
        document.write("El número es múltiplo de 3 y múltiplo de 5.");
        break;
    case (numero % 2 === 0):
        document.write("El número es par.");
        break;
    case (numero % 3 === 0):
        document.write("El número es múltiplo de 3.");
        break;
    case (numero % 5 === 0):
        document.write("El número es múltiplo de 5.");
        break;
    default:
        document.write("El número no es par, ni múltiplo de 3, ni múltiplo de 5.");
}
