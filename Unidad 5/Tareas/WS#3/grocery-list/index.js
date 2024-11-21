let entradaLista = document.getElementById('input_list');
let botonEnviar = document.getElementById('btn_submit');
let listaCompras = document.getElementById('list');
let botonLimpiar = document.getElementById('btn_clear');
let ventanaEdicion = document.getElementById('edit_window');
let entradaNuevoValor = document.getElementById('new_value');
let botonAceptar = document.getElementById('btn_accept');

let listaComprasArray = [];

window.onload = () => {
    let elementosGuardados = localStorage.getItem('groceryList');
    if (elementosGuardados) {
        listaComprasArray = JSON.parse(elementosGuardados);
        renderizarLista();
    }

    botonEnviar.addEventListener('click', agregarElemento);
    botonLimpiar.addEventListener('click', limpiarLista);
    botonAceptar.addEventListener('click', guardarElementoEditado);
};

function agregarElemento() {
    let nuevoElemento = entradaLista.value;
    if (nuevoElemento !== '') {
        listaComprasArray.push(nuevoElemento);
        renderizarLista();
        entradaLista.value = '';
        guardarEnAlmacenamientoLocal();
    }
}

function limpiarLista() {
    listaComprasArray = [];
    renderizarLista();
    guardarEnAlmacenamientoLocal();
}

function eliminarElemento(array) {
    let nuevaLista = [];
    for (let i = 0; i < listaComprasArray.length; i++) {
        if (i !== array) {
            nuevaLista.push(listaComprasArray[i]);
        }
    }
    listaComprasArray = nuevaLista;
    renderizarLista();
    guardarEnAlmacenamientoLocal();
}

function editarElemento(array) {
    indiceElementoAEditar = array;
    entradaNuevoValor.value = listaComprasArray[array];
    ventanaEdicion.style.display = 'block';
}

function guardarElementoEditado() {
    let nuevoTexto = entradaNuevoValor.value;
    if (nuevoTexto !== "") {
        listaComprasArray[indiceElementoAEditar] = nuevoTexto;
        renderizarLista();
        ventanaEdicion.style.display = 'none';
        guardarEnAlmacenamientoLocal();
    }
}

function renderizarLista() {
    listaCompras.innerHTML = '';
    for (let i = 0; i < listaComprasArray.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaComprasArray[i];

        let contenedorBotones = document.createElement('div');
        contenedorBotones.classList.add('button-container'); 

        let botonEditar = document.createElement('img');
        botonEditar.src = './img/edit.png'; 
        botonEditar.alt = 'Editar';
        botonEditar.classList.add('btn_edit');
        botonEditar.onclick = () => editarElemento(i);

        let botonEliminar = document.createElement('img');
        botonEliminar.src = './img/delete.png'; 
        botonEliminar.alt = 'Eliminar';
        botonEliminar.classList.add('btn_delete');
        botonEliminar.onclick = () => eliminarElemento(i);

        contenedorBotones.appendChild(botonEditar);
        contenedorBotones.appendChild(botonEliminar);
        
        itemLista.appendChild(contenedorBotones);
        listaCompras.appendChild(itemLista);
    }
}


function guardarEnAlmacenamientoLocal() {
    localStorage.setItem('groceryList', JSON.stringify(listaComprasArray));
}
