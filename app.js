const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Define una ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(port, '192.168.1.252', () => {
    console.log(`Servidor corriendo en http://192.168.1.252:${port}/`);
});