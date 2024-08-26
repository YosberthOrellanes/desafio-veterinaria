const fs = require('fs');
const path = './citas.json';

function registrarCita(cita) {
    try {
        const citas = leerCitasDesdeArchivo();
        citas.push(cita);
        fs.writeFileSync(path, JSON.stringify(citas, null, 2));
        console.log('Cita registrada correctamente.');
    } catch (error) {
        console.error('Error al registrar la cita:', error.message);
    }
}

function leerCitas() {
    try {
        const citas = leerCitasDesdeArchivo();
        console.log('Citas registradas:', citas);
    } catch (error) {
        console.error('Error al leer las citas:', error.message);
    }
}

function leerCitasDesdeArchivo() {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}

module.exports = { registrarCita, leerCitas };