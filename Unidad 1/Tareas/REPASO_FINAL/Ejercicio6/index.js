/**
 * Ejercicio 6.
 */

let N = parseInt(prompt("Introduce el primer valor:"));
let M = parseInt(prompt("Introduce el segundo valor"));
let sumaPares = 0;

if (N > M) {
    let aux = N;
    N = M;
    M = aux;
}

for (let i = N; i <= M; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

document.write("La suma es: " + sumaPares);