/**
 * Ejercicio 2
 */

document.write("<table border='1' style='border-collapse: collapse; width: 100%;'>");

document.write("<tr><th>Propiedad</th><th>Valor</th></tr>");

document.write("<tr><td>Anchura de Pantalla</td><td>" + window.screen.width + " píxeles</td></tr>");
document.write("<tr><td>Altura de Pantalla</td><td>" + window.screen.height + " píxeles</td></tr>");
document.write("<tr><td>Anchura de Vista</td><td>" + window.innerWidth + " píxeles</td></tr>");
document.write("<tr><td>Altura de Vista</td><td>" + window.innerHeight + " píxeles</td></tr>");
document.write("<tr><td>Color de Profundidad</td><td>" + window.screen.colorDepth + " bits</td></tr>");
document.write("<tr><td>Resolución de Color</td><td>" + window.screen.pixelDepth + " bits</td></tr>");

document.write("</table>");
