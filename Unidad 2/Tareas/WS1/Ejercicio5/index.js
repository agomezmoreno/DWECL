/**
 * Ejercicio 5: 
 */

function reloj() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    document.write("<p>");

    document.write(horas + " : " + minutos + " : " + segundos);
}

setInterval(reloj, 1000);
