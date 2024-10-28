/**
 * Ejercicio 7. 
 */

let numeroAdivinar = parseInt(prompt("Introduce el numero a adivinar"));
let numUsuario;


do {
    numUsuario = parseInt(prompt("Adivina el numero"));

    if (numUsuario > numeroAdivinar) {
        console.log("El número es menor");
    } else if (numUsuario < numeroAdivinar) {
        console.log("El número mayor");
    } else {
        document.write("¡Felicidades! Has adivinado el número");
    }
} while (numUsuario !== numeroAdivinar);