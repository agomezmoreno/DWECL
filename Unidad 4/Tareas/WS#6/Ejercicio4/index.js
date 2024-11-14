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