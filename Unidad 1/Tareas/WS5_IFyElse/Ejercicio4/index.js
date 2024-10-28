/**
 * Ejercicio 4.
 */

let numHermanos = parseInt(prompt("¿Cuantos hermanos tienes?"));
let cantidad = parseInt(prompt("Introduce una cantidad"));

if (numHermanos >= 3) {
    let descuento = cantidad * 0.15;
    let restandoDescuento = cantidad - descuento;
    document.write("El cantidad con descunto aplicado es: " + restandoDescuento);
} else if (numHermanos <= 3) {
    let descuento = cantidad * 0.05;
    let restandoDescuento = cantidad - descuento;
    document.write("El cantidad con descunto aplicado es: " + restandoDescuento);
} else {
    document.write("La cantidad es: " + cantidad);
}