/**
 * Ejercicio 7.
 */

let aleatorio = Math.floor(Math.random() * 101);

let seno = Math.sin(aleatorio);

document.write("<table border='1'>");

document.write("<tr>"); 
document.write("<td>" + aleatorio + "</td>"); 
document.write("<td>" + seno + "</td>"); 
document.write("</tr>");

document.write("</table>")