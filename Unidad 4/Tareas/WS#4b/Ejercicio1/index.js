let vidas = 3; 
let numColores = 6;
let indiceCorrecto;

window.onload = () => {
    generarColores();

    document.getElementById("newColors").onclick = function() {
        vidas = 3; 
        generarColores();
        document.getElementById("mensaje").innerText = ""; 
        document.getElementById("mensaje").style.display = "none"; 
    };

    document.getElementById("easy").onclick = () => {
        numColores = 3; 
        vidas = 3;
        generarColores();
        document.getElementById("mensaje").innerText = ""; 
        document.getElementById("mensaje").style.display = "none"; 
    };

    document.getElementById("hard").onclick = () => {
        numColores = 6;
        vidas = 3;
        generarColores();
        document.getElementById("mensaje").innerText = "";
        document.getElementById("mensaje").style.display = "none";
    };
}

function generarColores() {
    let R = generarAleatorio();
    let G = generarAleatorio();
    let B = generarAleatorio();
    let colorAdivinar = document.getElementById("colorCode");
    colorAdivinar.innerText = "RGB(" + R + ", " + G + ", " + B + ")";

    let divColores = document.querySelectorAll("section > div");
    indiceCorrecto = Math.floor(Math.random() * numColores);

    for (let i = 0; i < divColores.length; i++) {
        if (i < numColores) {
            if (i === indiceCorrecto) {
                divColores[i].style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";
            } else {
                let r = generarAleatorio();
                let g = generarAleatorio();
                let b = generarAleatorio();
                divColores[i].style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
            }

            divColores[i].style.display = "block";
        } else {
            divColores[i].style.display = "none";
        }

        divColores[i].onclick = () => {
            document.getElementById("mensaje").style.display = "block";
            if (i === indiceCorrecto) {
                document.getElementById("mensaje").innerText = "¡Correcto! Has adivinado el color.";
                document.getElementById("mensaje").style.color = "green";
                setTimeout(() => {
                    vidas = 3;
                    document.getElementById("mensaje").style.display = "none";
                    generarColores(); 
                }, 400);

            } else {
                vidas--;
                document.getElementById("mensaje").innerText = "Incorrecto. Te quedan " + vidas + " vidas.";
                document.getElementById("mensaje").style.color = "red";
                
                if (vidas === 0) {
                    document.getElementById("mensaje").innerText = "Has perdido.";
                    setTimeout(() => {
                        vidas = 3;
                        document.getElementById("mensaje").style.display = "none";
                        generarColores(); 
                    }, 400);
                }
            }
        }
    }
}

function generarAleatorio() {
    return Math.floor(Math.random() * 256);
}
