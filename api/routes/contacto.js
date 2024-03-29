'use strict';

const express = require('express'),
    router = express.Router(),
    Contacto = require('../models/contacto.model');

//Definición de la ruta para registrar contactos

router.post('/registrar-contacto', function(req, res) {
    let body = req.body;

    let nuevo_contacto = new Contacto({
        nombre: body.nombre,
        correo: body.correo,
        nacimiento: body.nacimiento,
        comentario: body.comentario
    });

    nuevo_contacto.save(
        function(err, contactoDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El contacto no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El contacto se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-contactos', function(req, res) {
    Contacto.find(function(err, contactosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });
        } else {
            res.json({
                success: true,
                lista_contactos: contactosBD
            });
        }
    })
});

module.exports = router;