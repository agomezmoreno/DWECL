/**
 * Ejercicio 4.14
 */

let columnas = parseInt(prompt("Introduce el número de columnas:"));
let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

document.write("<table bgcolor='black'>");
document.write("<tr bgcolor='white' height='" + alto + "'>");

let i;

while (i < columnas) {
    document.write("<td width='" + ancho + "'></td>");
    i++;
}

document.write("</tr>");
document.write("</table>");