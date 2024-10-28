/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text) {
    let hackerSpeak = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i]; 

        if (char === "a") {
            hackerSpeak += "4"; 
        } else if (char === "e") {
            hackerSpeak += "3"; 
        } else if (char === "i") {
            hackerSpeak += "1"; 
        } else if (char === "o") {
            hackerSpeak += "0"; 
        } else if (char === "s") {
            hackerSpeak += "5"; 
        } else {
            hackerSpeak += char; 
        }
    }

    return hackerSpeak;
}


console.log(toHackerSpeak("I'm a hacker now"));