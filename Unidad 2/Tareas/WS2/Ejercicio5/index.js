/**
 * Ejercicio 5.
 */

let a = parseFloat(prompt("Introduce el coeficiente de a: "));
let b = parseFloat(prompt("Introduce el coeficiente de b: "));
let c = parseFloat(prompt("Introduce el coeficiente de c: "));


let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante) / (2 * a));
    let x2 = (-b + Math.sqrt(discriminante) / (2 * a));

    document.write("Las soluciones son: " + x1 + (" y ") + x2);
    
} else if (discriminante === 0) {
    let x = -b / (2 * a);
    document.write("La solución es: x = " + x);
} else {
    document.write("No hay soluciones.");
}

