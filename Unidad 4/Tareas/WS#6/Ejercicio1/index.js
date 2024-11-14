window.onload = () => {
    let input = document.getElementById("inputGuardar");
    let username = document.getElementById("username");

    if (!leerCookie("usuario")) {
        input.style.display = "inline";
        username.style.display = "inline";

        input.addEventListener("click", () => {
            let nombre = document.getElementById("username").value;
            crearCookie("usuario", nombre, 5);
            location.reload();
        });

    } else {
        let saludo = document.createElement("h1");
        saludo.innerText = "Bienvenido! " + leerCookie("usuario");
        document.body.appendChild(saludo);

        let cerrarSesion = document.createElement("button");
        cerrarSesion.innerText = "Cerrar sesion";
        cerrarSesion.addEventListener("click", () => {
            borrarCookie("usuario");
            location.reload();
        });
        document.body.appendChild(cerrarSesion);
    }
}




function crearCookie(identificador, valor, fechaExpiracion)
{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (fechaExpiracion * 60 * 1000)); 
    document.cookie = identificador + "=" + valor + ";" + "expires=" + fecha;    
}


function leerCookie(identificador)
{
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let partes = cookies[i].split("=");
        let clave = partes[0];
        let valor = partes[1];

        if (clave === identificador) 
        {
            return valor;
        }
        
    }
    return null;
}

function borrarCookie(identificador) 
{
    crearCookie(identificador, "", new Date(0));  
}