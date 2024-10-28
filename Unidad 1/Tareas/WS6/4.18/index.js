/**
 * Ejercicio 4.18
 */

let numColumnas = prompt("Introduce el número de columnas");
let numFilas = prompt("Introduce el número de filas");
let altura = prompt("Introduce la altura");
let anchura = prompt("Introduce la anchura");

document.write("<table border='1' cellspacing='0' cellpadding='5'>");

for (let i = 0; i < numFilas; i++) {
    document.write("<tr>");

    for (let j = 0; j < numColumnas; j++) {
        document.write("<td width='" + anchura + "' height='" + altura + "'></td>");
    }

    document.write("</tr>");
}
        
document.write("</table>");
