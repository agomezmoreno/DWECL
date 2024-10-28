/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors, length) {
    let random = [];

    for (let i = 0; i < length; i++) {
        let indiceRandom = Math.floor(Math.random() * colors.length);
        random.push(colors[indiceRandom]);
    }

    return random;
}

console.log(getRandomColorSequence(["red",  "blue", "green"], 4));