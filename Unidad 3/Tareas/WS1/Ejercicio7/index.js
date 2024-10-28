/**
 * Ejercicio 7
 */

function factorial(n) {
    if (n === 0 || n === 1 ) {
        return 1;
    } 
        
    return n * factorial(n - 1);
}

document.write("<table border='1'>");

document.write("<tr><th>Numero</th><th>Factorial</th></tr>");

for (var i = 1; i <= 10; i++) {
    document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}

document.write("</table>");
