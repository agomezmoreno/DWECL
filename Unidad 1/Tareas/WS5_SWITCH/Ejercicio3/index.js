/**
 * Ejercicio 3.
 */

let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación (+, -, *, /):");

switch (operacion) {
    case "+":
        document.write("Resultado: " + (numero1 + numero2));
        break;
    case "-":
        document.write("Resultado: " + (numero1 - numero2));
        break;
    case "*":
        document.write("Resultado: " + (numero1 * numero2));
        break;
    case "/":
        document.write("Resultado: " + (numero1 / numero2));
        break;
}
