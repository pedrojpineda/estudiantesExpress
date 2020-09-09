const express = require('express');
const EstudiantesControl = require('../control/estudiantesControl');

var api = express.Router();

// RUTA INSERTAR ESTUDIANTE
api.post('/', EstudiantesControl.insertar);

// RUTA LISTAR ESTUDIANTES
api.get('/', EstudiantesControl.listar);

// RUTA ACTUALIZAR ESTUDIANTE
api.put('/:id', EstudiantesControl.modificar);

// RUTA ELIMINAR ESTUDIANTE
api.delete('/:id', EstudiantesControl.eliminar);

module.exports = api;