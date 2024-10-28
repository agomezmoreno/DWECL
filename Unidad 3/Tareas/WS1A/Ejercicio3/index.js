/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers) {
    let mayor = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > mayor) {
            mayor = numbers[i];
        }
    }
    return mayor;
}

console.log(getBiggestNumber([3, 8, 2, 1, 10]));