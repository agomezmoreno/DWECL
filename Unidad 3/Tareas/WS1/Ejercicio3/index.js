/**
 * Ejercicio 3
 */

function lanzamiento() {
    for (let i = 0; i < 6000; i++) {
        let aleatorio = Math.floor(Math.random() * 6) + 1;
        console.log(i + ": " + aleatorio);
    }
    
}

console.log(lanzamiento());