window.onload = () => {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let dni = document.getElementById("dni");
    let telefono = document.getElementById("telefono");
    let correo = document.getElementById("correo");
    let username = document.getElementById("username");

    valida(nombre, validarNombre, "nombreError", "El nombre solo puede contener letras.");
    valida(apellidos, validarApellidos, "apellidosError", "Los apellidos solo pueden contener letras.");
    valida(dni, validarDNI, "dniError", "El DNI debe tener el formato 12345678A.");
    valida(telefono, validarTelefono, "telefonoError", "El teléfono debe tener 9 dígitos.");
    valida(correo, validarCorreo, "correoError", "El correo no tiene un formato válido.");
    valida(username, validarUsername, "usernameError", "El nombre de usuario debe tener al menos 8 caracteres, un número y un símbolo.");
}

function validarNombre(string) {
    return /^[a-zA-Z]+$/.test(string);
}

function validarApellidos(string) {
    return /^[a-zA-Z\s]+$/.test(string);
}

function validarDNI(string) {
    return /^\d{8}[a-zA-Z]$/.test(string);
}

function validarTelefono(string) {
    return /^\d{9}$/.test(string);
}

function validarCorreo(string) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(string);
}

function validarUsername(string) {
    return /^(?=.*\d)(?=.*[^\w\d\s]).{8,}$/.test(string);
}

function valida(campo, validandoCampo, errorCampo, mensajeError) {
    campo.addEventListener("blur", () => {
        let error = document.getElementById(errorCampo);
        if (!validandoCampo(campo.value)) {
            campo.style.border = "2px solid red";
            error.textContent = mensajeError;
            error.style.color = "red";
        } else {
            campo.style.border = "2px solid green";
            error.textContent = "";
        }
    });
}
