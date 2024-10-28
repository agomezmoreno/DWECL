/**
 * Ejercicio 1
 */

let num = prompt("Introduce un numero de tarjeta");

function validateCreditCard(numero) {
    numero = numero.replace(/-/g, '');

    let numeroValidado = true;

    if (numero.length != 16) {
        numeroValidado = false;
    }

    let todosIguales = true;
    for (let i = 1; i < numero.length; i++) {
        if (numero[i] != numero[0]) {
            todosIguales = false; 
        }
    }
    
    if (todosIguales) {
        numeroValidado = false;
    }
    

    let ultimoDigito = numero[numero.length - 1];
    if (ultimoDigito % 2 !== 0) {
        numeroValidado = false;
    }

    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);
    }

    if (suma <= 16) {
        numeroValidado = false;
    }

    return numeroValidado;
}

document.write(validateCreditCard(num));

