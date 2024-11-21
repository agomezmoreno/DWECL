window.onload = () => {
    var pelota = document.getElementById("pelota");
    var posicionX = 50;
    var posicionY = 50;
    var limiteX = 200;
    var limiteY = 200;
    var radio = 40;
    var velocidadX = 5;
    var velocidadY = 5;

    setInterval(()=>{
        posicionX += velocidadX;
        posicionY += velocidadY;

        pelota.setAttribute("cy", posicionY);
        pelota.setAttribute("cx", posicionX);

        if ((posicionX + radio) > limiteX){
            velocidadX *= -1;
        } else if ((posicionX - radio) < 0) {
            velocidadX *= -1;
        } else if ((posicionY + radio) > limiteY){
            velocidadY *= -1;
        } else if ((posicionY - radio) < 0) {
            velocidadY *= -1;
        }
    }, 30)



}