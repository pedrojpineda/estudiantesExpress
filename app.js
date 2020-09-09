const express = require('express');
const cors = require('cors');
const app = express();

// Declarar las rutas de la API
const estudiantesRutas = require('./rutas/estudiantesRuta');

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', estudiantesRutas);

module.exports = app;