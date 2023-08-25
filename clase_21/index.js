const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    // responde un html
});
app.get('/nosotros', (req, res) => {
    // responde un html
});

app.get('/api/home-content', (req, res) => {
    // responde un json con el contenido
});

app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080')
})