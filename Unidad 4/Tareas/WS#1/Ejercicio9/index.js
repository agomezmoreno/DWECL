window.onload = () => {
    let imagen = document.getElementById("imagen");
    let offsetX, offsetY;

    imagen.addEventListener("click", (e) => {
        if (e.shiftKey) {
            offsetX = e.clientX - imagen.offsetLeft;
            offsetY = e.clientY - imagen.offsetTop;
            document.addEventListener("mousemove", moverImagen);
            document.addEventListener("mouseup", soltarImagen);    
        }
    });

    let moverImagen = (e) => {
        imagen.style.left = (e.clientX - offsetX) + "px";
        imagen.style.top = (e.clientY - offsetY) + "px";
    };

    let soltarImagen = () => {
        document.removeEventListener("mousemove", moverImagen);
        document.removeEventListener("mouseup", soltarImagen);
    };
}

