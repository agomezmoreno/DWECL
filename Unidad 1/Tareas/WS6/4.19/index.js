/**
 * Ejercicio 4.19
 */

let celda = prompt("Introduce la anchura y altura de la celda");
let color;

document.write("<table border='1' cellspacing='0' cellpadding='1'>");

for (let i = 0; i < 8; i++) {
    document.write("<tr>");
    for (let j = 0; j < 8; j++) {
        
        if (i % 2 == 0) {
            if (j % 2 == 0) {
                color = "black";
            } else {
                color = "white";
            }
        } else {
            if (j % 2 == 0) {
                color = "white";
            } else {
                color = "black"
            }
        }

        document.write("<td width = '"+ celda +"' height='"+ celda +"' bgcolor='"+ color +"'></td>");
    }
}
document.write("</tr>");
document.write("</table>");