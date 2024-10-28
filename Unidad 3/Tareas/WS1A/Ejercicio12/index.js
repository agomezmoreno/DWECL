/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */


function getFileExtension(file) {
    let punto = file.lastIndexOf(".");

    if (punto > 0) {
        return file.substring(punto + 1);
    }

    return ""; 
}

console.log(getFileExtension("imagen.jpg"));