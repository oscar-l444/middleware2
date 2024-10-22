// index.js
const express = require("express");
const app = express();
const rutas = require("./pruebas/rutas"); // Importar las rutas

app.use('/', rutas); // Usar las rutas definidas en el archivo rutas.js

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
