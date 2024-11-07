function validarMayuscula(string) 
{
    return /[A-Z]/.test(string);
}

console.log(validarMayuscula("holA"));


function validarCaracteresEspeciales(string)
{
    return /[!@#$%^&]/.test(string);
}

console.log(validarCaracteresEspeciales("hola@"));


function validarCorreo(string) 
{
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(string);
}

console.log(validarCorreo("holaA2@hola.com"));


function validarTarjetaCredito(string)
{
    return /^(\d{4}[-]){3}\d{4}$/.test(string);
}

console.log(validarTarjetaCredito("1234-5678-9123-4567"));


function validarLongitud(string)
{
    return /^.{8,}$/.test(string);
}

console.log(validarLongitud("1234567888"));


function validarNumero(string)
{
    return /\d/.test(string);
}

console.log(validarNumero("fdsgfd1"));


