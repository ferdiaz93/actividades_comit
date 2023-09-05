const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const navigationController = require('./server/controllers/NavigationController')

//middlewares
app.use(express.static(path.join(__dirname, './client')));
app.use(cors());

app.get('/', navigationController.goIndex);
app.get('/nosotros', navigationController.goNosotros);


// Crear rutas que devuelvan distintas secciones html.
// (Home, Sobre Nosotros,Contacto)
// Todos los html deben tener redirecciones a las demas rutas de los html.




app.get('/api/usuarios', (req, res) => {
    res.json({name:"fernando", apellido: "diaz"});
})

app.listen(8080, () => {
    console.log('Servidor corriendo en puerto 8080')
})