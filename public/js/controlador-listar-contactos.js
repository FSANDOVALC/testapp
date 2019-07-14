'use strict';

const tbody = document.querySelector('#tbl_contactos tbody');
let lista_contactos = [];


let mostrar_tabla = async() => {

    lista_contactos = await obtenerContactos();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_contactos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_contactos[i]['nombre'];
        fila.insertCell().innerHTML = lista_contactos[i]['correo'];
        fila.insertCell().innerHTML = lista_contactos[i]['nacimiento'];
        fila.insertCell().innerHTML = lista_contactos[i]['comentario'];
    }


};


mostrar_tabla();