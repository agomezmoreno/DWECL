// Selección de elementos
const formulario = document.querySelector(".grocery-form");
const entrada = document.querySelector("input");
const lista = document.querySelector(".grocery-list");
const mensajeAlerta = document.querySelector(".alert");
const botonBorrarTodo = document.querySelector(".clear-btn");
const contenedorLista = document.querySelector(".grocery-container");

let enEdicion = null; // Controlar si se está editando un elemento

// Cargar elementos guardados al iniciar
window.onload = cargarElementos;

// Agregar elemento
formulario.onsubmit = function (e) {
  e.preventDefault();
  const texto = entrada.value.trim();

  if (!texto) {
    mostrarAlerta("Escribe algo", "peligro");
    return;
  }

  if (enEdicion) {
    enEdicion.querySelector("p").textContent = texto;
    guardarLista();
    mostrarAlerta("Elemento actualizado", "exito");
    enEdicion = null;
    formulario.querySelector(".submit-btn").textContent = "Agregar"; // Restablecer texto del botón
  } else {
    crearElemento(texto);
    guardarLista();
    mostrarAlerta("Elemento agregado", "exito");
  }

  entrada.value = "";
  verificarLista();
};

// Crear un elemento en la lista
function crearElemento(texto) {
  const item = document.createElement("article");

  // Crear y configurar el párrafo
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;

  // Crear y configurar el botón de editar
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.className = "edit";

  // Crear y configurar el botón de borrar
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.className = "delete";

  // Agregar los elementos al artículo
  item.appendChild(parrafo);
  item.appendChild(botonEditar);
  item.appendChild(botonBorrar);

  // Agregar el artículo a la lista
  lista.appendChild(item);
}


// Borrar toda la lista
botonBorrarTodo.onclick = function () {
  lista.innerHTML = "";
  guardarLista();
  verificarLista();
  mostrarAlerta("Lista vaciada", "peligro");
};

lista.onclick = function (e) {
  const boton = e.target;

  // Si el botón tiene clase "delete"
  if (boton.className === "delete") {
    const item = boton.parentElement;
    lista.removeChild(item); // Elimina el elemento directamente
    guardarLista();
    verificarLista();
    mostrarAlerta("Elemento eliminado", "peligro");
    return;
  }

  // Si el botón tiene clase "edit"
  if (boton.className === "edit") {
    const item = boton.parentElement;
    entrada.value = item.querySelector("p").textContent; // Obtener texto del párrafo
    enEdicion = item; // Marcar el elemento como en edición
    formulario.querySelector(".submit-btn").textContent = "Actualizar"; // Cambiar texto del botón
  }
}

// Mostrar alerta
function mostrarAlerta(mensaje, tipo) {
  mensajeAlerta.textContent = mensaje;
  mensajeAlerta.className = `alert alert-${tipo}`;
  setTimeout(() => (mensajeAlerta.textContent = ""), 1500);
}

// Guardar lista en localStorage
function guardarLista() {
  const items = [...lista.children].map(item => item.querySelector("p").textContent);
  localStorage.setItem("lista", JSON.stringify(items));
}

// Cargar elementos desde localStorage
function cargarElementos() {
  const items = JSON.parse(localStorage.getItem("lista")) || [];
  items.forEach(texto => crearElemento(texto));
  verificarLista();
}

// Verificar si la lista está vacía y actualizar el estado del contenedor
function verificarLista() {
  if (lista.children.length === 0) {
    contenedorLista.classList.remove("show-container");
  } else {
    contenedorLista.classList.add("show-container");
  }
}
