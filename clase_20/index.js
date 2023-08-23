const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

//middlewares
app.use(express.static(path.join(__dirname, './client')));
app.use(cors());

app.get('/contacto', (req, res) => {
    const filePath = path.join(__dirname, './client/index.html')
    res.sendFile(filePath);
});
// Crear rutas que devuelvan distintas secciones html.
// (Home, Sobre Nosotros,Contacto)
// Todos los html deben tener redirecciones a las demas rutas de los html.




app.get('/api/usuarios', (req, res) => {
    res.json({name:"fernando", apellido: "diaz"});
})

app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080')
})