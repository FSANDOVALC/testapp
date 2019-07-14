'use strict';

let registrarContacto = (pnombre, pcorreo, pfecha, pcomentario) => {
    axios({
        method: 'post',
        url: '/api/registrar-contacto',
        responseType: 'json',
        data: {
            nombre: pnombre,
            correo: pcorreo,
            nacimiento: pfecha,
            comentario: pcomentario
        }
    });
};

let obtenerContactos = async() => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: '/api/listar-contactos',
            responseType: 'json'
        });

        const result = await response;

        return result.data.lista_contactos;
    } catch (error) {
        alert(error);
    }
};