/**
 * Ejercicio 4.13
 */

let columnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));


document.write("<table bgcolor='black'>");
document.write("<tr bgcolor='white' height='" + alto + "'>");

let i = 0;
while (i < columnas) {
    if (i % 2 === 0) {
        document.write("<td width='" + ancho + "' + bgcolor=black></td>");
    } else {
        document.write("<td width='" + ancho + "' + bgcolor=white></td>");
    }
    i++
}


document.write("</tr>");
document.write("</table>");
