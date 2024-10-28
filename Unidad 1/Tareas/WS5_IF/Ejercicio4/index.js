/**
 * Ejercicio 4.
 */

let num = parseFloat(prompt("Introduce un número"));

if (num > 100) {
    let descuento = num * 0.15;
    let restandoDescuento = num - descuento;
    document.write("El número con descunto aplicado es: " + restandoDescuento);
}