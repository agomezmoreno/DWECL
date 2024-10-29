window.onload = () => {
    let R = generarAleatorio();
    let G = generarAleatorio();
    let B = generarAleatorio();
    let colorAdivinar = document.getElementById("colorCode");
    colorAdivinar.innerText = "RGB(" + R + ", " + G + ", " + B + ")";
    
    let divColores = document.getElementsByTagName("div");
    for (let i = 0; i < divColores.length; i++) {
        let R = generarAleatorio();
        let G = generarAleatorio();
        let B = generarAleatorio();
        divColores[i].style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
    }
}

function generarAleatorio() {
    return Math.floor(Math.random() * 256);
}

