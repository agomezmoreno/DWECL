/**
 * Ejercicio 4.17
 */

for (let i = 1; i < 10; i++) {
    document.write("<p><b> Tabla del " + i + "</b>");
    for (let j = 1; j < 10; j++) {
        document.write("<br>" + i + " x " + j + " = " + (i*j));
    }
}

