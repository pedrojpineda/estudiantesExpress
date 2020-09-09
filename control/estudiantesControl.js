const Estudiante = require('../modelo/estudiantesModelo')

// INSERTAR ESTUDIANTE
function insertar(req, res) {
    var estudiante = new Estudiante();
    var parametros = req.body;

    estudiante.nombres = parametros.nombres;
    estudiante.apellidos = parametros.apellidos;
    estudiante.edad = parametros.edad;
    estudiante.correo = parametros.correo;
    estudiante.direccion = parametros.direccion;
    estudiante.telefono = parametros.telefono;

    estudiante.save((err, estudianteNuevo) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!estudianteNuevo) {
                res.status(200).send({ message: "No fue posible realizar el registro del estudiante" });
            } else {
                res.status(200).send({
                    status: 'Estudiante creado',
                    estudiante: estudianteNuevo
                });
            }
        }
    })
}

// LISTAR ESTUDIANTES
function listar(req, res) {
    Estudiante.find((err, estudiantesEncontrados) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!estudiantesEncontrados) {
                res.status(200).send({ message: "No fue posible listar los estudiantes" })
            } else {
                res.status(200).send({
                    status: 'Estudiantes encontrados',
                    estudiante: estudiantesEncontrados
                });
            }
        }
    })
}

// ACTUALIZAR ESTUDIANTE
function modificar(req, res) {
    var estudianteId = req.params.id;
    var nuevosDatosEstudiante = req.body;

    Estudiante.findByIdAndUpdate(estudianteId, nuevosDatosEstudiante, (err, estudianteActualizado) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!estudianteActualizado) {
                res.status(200).send({ message: "No fue posible actualizar los datos del estudiante" })
            } else {
                res.status(200).send({
                    status: 'Estudiante actualizado',
                    estudiante: nuevosDatosEstudiante
                });
            }
        }
    })
}


// ELIMINAR ESTUDIANTE
function eliminar(req, res) {
    var estudianteId = req.params.id;

    Estudiante.findByIdAndDelete(estudianteId, (err, estudianteEliminado) => {
        if (err) {
            res.status(500).send({ message: "Error del servidor" });
        } else {
            if (!estudianteEliminado) {
                res.status(404).send({ message: "No fue posible eliminar al estudiante" })
            } else {
                res.status(200).send({
                    status: 'Estudiante eliminado',
                    estudiante: estudianteEliminado
                });
            }
        }
    })
}


// Exportamos las funciones
module.exports = {
    insertar,
    listar,
    modificar,
    eliminar
}