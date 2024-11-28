const http = require('http');
const fs = require('fs');
const path = require('path');

// Configura el puerto y la dirección IP
const hostname = '192.168.1.252'; // Esto permite que el servidor sea accesible desde otros dispositivos en la red local
const port = 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
    // Ruta del archivo HTML
    const filePath = path.join(__dirname, 'index.html');

    // Lee el archivo HTML
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error interno del servidor');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

// Inicia el servidor
server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});