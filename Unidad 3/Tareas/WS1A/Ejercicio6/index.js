/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor() {
    let RockPaperScissor = ["rock", "paper", "scissor"];
    let indiceRandom = Math.floor(Math.random() * RockPaperScissor.length);
    let result = RockPaperScissor[indiceRandom];
    return result;
}


console.log(getRockPaperScissor());