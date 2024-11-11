window.onload = () => {
        let fechaExpiracion = new Date();
        fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 1);
        crearCookie("usuario", "alvaro", fechaExpiracion); 

}


function crearCookie(identificador, valor, fechaExpiracion)
{
    let fecha = new Date(fechaExpiracion);
    document.cookie = identificador + "=" + encodeURIComponent(valor) + "; expires=" + fecha;
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
            return encodeURIComponent(valor);
        }
        
    }
    return null;
}


function borrarCookie()
{
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        let clave = cookies[i].split("=")[0];
        document.cookie = clave + "=; expires=Sat, 26 Oct 1985 01:20:00 UTC;";
    }
    
}