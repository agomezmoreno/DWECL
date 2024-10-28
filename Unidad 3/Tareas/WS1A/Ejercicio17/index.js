/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */


function removeWords(str, words) {
    let result = "";
    let arrStr = str.split(" ");

    for (let i = 0; i < arrStr.length; i++) {
        let remove = false;
        for (let j = 0; j < words.length; j++) {
            if (arrStr[i] === words[j]) {
                remove = true;
            }
            
        }
        
        if (!remove) {
            if (result !== "") {
                result += " "; 
            }
            result += arrStr[i];
        }


    }

    return result;
}


console.log(removeWords("This is a really bad test", ["really", "bad"])); 