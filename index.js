const { registrarCita, leerCitas } = require('./operaciones');

const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv;

if (operacion === 'registrar') {
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log('Error: Debes proporcionar todos los datos: nombre, edad, tipo de animal, color y enfermedad.');
    } else {
        registrarCita({
            nombre,
            edad,
            tipo: animal,
            color,
            enfermedad
        });
    }
} else if (operacion === 'leer') {
    leerCitas();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}