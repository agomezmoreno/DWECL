window.onload = () => {
    // Seleccion de elementos
    let inputRegistrate = document.getElementById("inputRegistrate");
    let username = document.getElementById("username");
    let todosH1 = document.getElementsByTagName("h1");
    let todosInput = document.getElementsByTagName("input");

    // si la cookie usuario no existe
    if (!leerCookie("usuario")) {
        inputRegistrate.style.display = "block";
        username.style.display = "inline";

        // cuando el usuario hace click sobre el boton de registrarse
        inputRegistrate.addEventListener("click", () => {
            // Coge los valores de los elementos
            let nombre = document.getElementById("username").value; 
            let colorFondo = document.getElementById("colorFondo").value;
            let colorTexto = document.getElementById("colorTexto").value;
            let tamañoTexto = document.getElementById("tamanioTexto").value;
            // y crea una cookie por cada uno de esos valores
            crearCookie("usuario", nombre, 5);
            crearCookie("colorFondo", colorFondo, 0); // al no poner fecha de expiracion la segunda cookie se elimina al cerrar el navegador
            crearCookie("colorTexto", colorTexto, 5);
            crearCookie("tamañoTexto", tamañoTexto, 5);
            location.reload(); // recarga la pagina para que se actualicen los cambios
        });
    // si la cookie usuario existe
    } else {
        // todos los elementos h1 y todos los elementos input los oculta
        for (let h1 of todosH1) {
            h1.style.display = "none";
        }
        for (let input of todosInput) {
            input.style.display = "none";
        }

        // crea un elemento p
        let saludo = document.createElement("p");
        // y le da formato con los valores almacenados de las cookies
        saludo.innerText = "Bienvenido! " + leerCookie("usuario");
        document.body.style.backgroundColor = leerCookie("colorFondo");
        saludo.style.color = leerCookie("colorTexto");
        saludo.style.fontSize = leerCookie("tamañoTexto") + "px";
        document.body.appendChild(saludo);

        // crea un elemento button para cerrar la sesion
        let cerrarSesion = document.createElement("button");
        cerrarSesion.innerText = "Cerrar sesion";

        // cuando se le da click borra los valores de todas las cookies para que la pagina vuelva al estado original
        cerrarSesion.addEventListener("click", () => {
            borrarCookie("usuario");
            borrarCookie("colorFondo");
            borrarCookie("colorTexto");
            borrarCookie("tamañoTexto");
            location.reload();
        });
        document.body.appendChild(cerrarSesion);
        
    }

    
}

function crearCookie(identificador, valor, fechaExpiracion)
{
    let fecha = new Date();
    
    // si fechaExpiracion es 0, se crea la cookie como una cookie de sesión sin el expires
    if (fechaExpiracion === 0) {
        document.cookie = identificador + "=" + valor;  
    } else {
        fecha.setTime(fecha.getTime() + (fechaExpiracion * 60 * 1000)); 
        document.cookie = identificador + "=" + valor + "; expires=" + fecha;
    }
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