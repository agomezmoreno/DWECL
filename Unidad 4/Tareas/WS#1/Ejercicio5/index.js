document.write('<table id="miTabla">');
for (let i = 0; i < 100; i++) {
    document.write('<tr>');
    for (let j = 0; j < 100; j++) {
        document.write('<td></td>');
    }
    document.write('</tr>');
}
document.write('</table>');

window.onload = () => {
    let celdas = document.getElementsByTagName("td");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("mousemove", (e) => {
            if (e.ctrlKey) {
                celdas[i].style.backgroundColor = "red";
            } else if (e.shiftKey) {
                celdas[i].style.backgroundColor = "blue";
            } else if (e.altKey) {
                celdas[i].style.backgroundColor = "";
            }
        });


        let boton = document.getElementById("borrarCanvas");
        boton.addEventListener("click", () => {
            let tabla = document.getElementById("miTabla");
            if (tabla) {
                tabla.remove();
            }
        });

    };
};