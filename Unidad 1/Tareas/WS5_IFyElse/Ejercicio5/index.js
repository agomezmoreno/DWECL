/**
 * Ejercicio 5.
 */

let notaExamen1 = parseFloat(prompt("Introduce la nota del primer examen"));
let notaExamen2 = parseFloat(prompt("Introduce la nota del segundo examen"));
let notaTrabajo1 = parseFloat(prompt("Introduce la nota del primer trabajo"));
let notaTrabajo2 = parseFloat(prompt("Introduce la nota del segundo trabajo"));

if (notaExamen1 >= 4.5 && notaExamen2 >= 4.5 && notaTrabajo1 >= 4.5 && notaTrabajo2 >= 4.5) {
    let mediaExamenes = (notaExamen1 + notaExamen2) / 2;
    let mediaTrabajos = (notaTrabajo1 + notaTrabajo2) / 2;
    let notaFinal = (mediaExamenes * 0.25) + (mediaTrabajos * 0.75);

    if (notaFinal >= 5) {
        document.write("Has aprobado con un " + notaFinal);
    } else {
        document.write("Has suspendido con un " + notaFinal);
    }

} else {
    document.write("Las notas no superan el 4.5");
}