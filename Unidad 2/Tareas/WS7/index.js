/**
 * Ejercicio 1
 */

function muestraPosicion(pos) {
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}

function error(error) {
    console.log("Se ha producido un error");
    console.log("Error code " + error.code);
    console.log(error.message);
}

navigator.geolocation.watchPosition(muestraPosicion, error);



