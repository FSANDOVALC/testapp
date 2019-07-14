'use strict';

const boton_enviar = document.querySelector('#btn-enviar');
const input_nombre = document.querySelector('#txt-nombre');
const input_fecha = document.querySelector('#txt_fecha');
const input_correo = document.querySelector('#txt_correo');
const input_comentario = document.querySelector('#txt_comentario');


let validar = (pnombre, pcorreo, pfecha, pcomentario) => {
    let error = false;

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
    }

    if (pfecha == 'Invalid Date') {
        error = true;
        input_fecha.classList.add('input_error');
    } else {
        input_fecha.classList.remove('input_error');
    }

    if (pcomentario == '') {
        error = true;
        input_comentario.classList.add('input_error');
    } else {
        input_comentario.classList.remove('input_error');
    }


    return error;
};

let saludar = () => {
    let nombre = input_nombre.value;
    let correo = input_correo.value;
    let fecha = new Date(input_fecha.value);
    let fecha_formateada = fecha.getFullYear() + '-' + Number(fecha.getUTCMonth() + 1) + '-' + fecha.getUTCDate();
    let comentario = input_comentario.value;

    let error = validar(nombre, correo, fecha, comentario);

    if (error == false) {
        registrarContacto(nombre, correo, fecha_formateada, comentario);
        Swal.fire({ //formato json
            title: 'Se ha enviado su mensaje exitosamente',
            type: 'success',
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible'
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha enviado su mensaje',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


boton_enviar.addEventListener('click', saludar);