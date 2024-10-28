/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */


function getFactorial(x) {
    let result = 1;

    for (let i = 1; i <= x; i++) {
        result *= i;
    }

    return result;
}

console.log(getFactorial(4));