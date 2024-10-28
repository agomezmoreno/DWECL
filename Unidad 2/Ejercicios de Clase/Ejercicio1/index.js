var numero = 0;
function miFuncion() {
    console.log("Llamada a miFuncion");
}

miFuncion();

setInterval(miFuncion,1000);


setTimeout(miFuncion, 5000);