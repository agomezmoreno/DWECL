window.onload = () => {
    let offsetX, offsetY;
    let imagenMoviendo = null; 
    let imagenes = document.querySelectorAll(".imagenes");

    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", (e) => {
            if (e.shiftKey) {
                offsetX = e.clientX - imagen.offsetLeft;
                offsetY = e.clientY - imagen.offsetTop;
                imagenMoviendo = imagen;
                document.addEventListener("mousemove", moverImagen);
                document.addEventListener("mouseup", soltarImagen);
            }
        });
    });

    let moverImagen = (e) => {
        if (imagenMoviendo) {
            imagenMoviendo.style.left = (e.clientX - offsetX) + "px";
            imagenMoviendo.style.top = (e.clientY - offsetY) + "px";
        }
    };

    let soltarImagen = () => {
        if (imagenMoviendo) {
            imagenMoviendo = null;
        }
        document.removeEventListener("mousemove", moverImagen);
        document.removeEventListener("mouseup", soltarImagen);
    };
}