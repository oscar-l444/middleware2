// rutas.js
var express = require('express');
var ruta = express.Router();
var middleware = require('./middlewares');

// Ruta para "/"
ruta.get('/', (req, res) => {
    console.log("Entrando a la página principal");
    res.send('Bienvenido a la página principal');
});

// Ruta 1 - Imprime fecha y mensaje en consola
ruta.get('/ruta1', middleware.FechaHora, middleware.saludo, (req, res) => {
    res.send('Estás en la Ruta 1');
});

// Ruta 2 - Imprime fecha y mensaje en consola
ruta.get('/ruta2', middleware.FechaHora, middleware.saludo, (req, res) => {
    res.send('Estás en la Ruta 2');
});

// Ruta 3 - No imprime nada en consola
ruta.get('/ruta3', (req, res) => {
    res.send('Estás en la Ruta 3');
});

module.exports = ruta;
