/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length) {
    let RockPaperScissor = ["rock", "paper", "scissor"];
    let randomSequence = [];

    for (let i = 0; i < length; i++) {
        let indiceRandom = Math.floor(Math.random() * RockPaperScissor.length);
        randomSequence.push(RockPaperScissor[indiceRandom]);
    }

    return randomSequence; 
}

console.log(getRockPaperScissorRandomSequence(4));