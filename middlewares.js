var FechaHora = (req, res, next) => {
    console.log("Fecha y hora de entrada:", new Date()); // Imprime la fecha y hora actual
    next(); // Continúa con la siguiente función
};

var saludo = (req, res, next) => {
    console.log("Bienvenido, estás en la ruta:", req.path); // Imprime la ruta actual
    next(); // Continúa con la siguiente función
};

module.exports = { FechaHora, saludo };
