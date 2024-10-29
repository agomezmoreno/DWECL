window.onload = () => {
    let btn =document.getElementById("btnCambiar");
    let btnDeOtroModo = document.getElementsByTagName("button")[0];
    btnDeOtroModo.addEventListener("click", cambiarH1);
}

function cambiarH1() {
    let cajaTexto = document.getElementById("textBox");
    let button = document.getElementById("tith1");

    if (cajaTexto.value != "") {
        button.innerText = cajaTexto.value;
        cajaTexto.value = "";
        button.style.backgroundColor = "green";
    }
}
