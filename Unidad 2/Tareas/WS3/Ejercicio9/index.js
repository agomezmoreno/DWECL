/**
 * Ejercicio 9
 */

function formatearPalabra(cad_arg) {
    let primeraFila = '';
    for (let i = 0; i < cad_arg.length; i++) {
        primeraFila += cad_arg[i] + ' ';
    }
    console.log(primeraFila);


    for (let i = 1; i < cad_arg.length - 1; i++) {
        let fila = cad_arg[i]; 
        for (let j = 1; j < cad_arg.length - 1; j++) {
            fila += '  ';
        }
        fila += ' ' + cad_arg[cad_arg.length - 1 - i];
        console.log(fila);
    }


    let ultimaFila = '';
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        ultimaFila += cad_arg[i] + ' '; 
    }
    console.log(ultimaFila);
}

formatearPalabra("HOLA");