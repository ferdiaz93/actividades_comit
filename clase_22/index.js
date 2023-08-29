require('dotenv').config();
const express = require('express');

const User = require('./db/schemas/UserSchema');
const { conectarDB, desconectarDB } = require('./db/conection')
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
    console.log(process.env);
    console.log("Nueva peticion en users")
    await conectarDB();
    // User.find es una promesa que retorna un array de usuarios
    const users = await User.find({});
    await desconectarDB();
    res.json(users);
});

app.post('/user', async (req, res) => {
    const { name, email, age } = req.body;
    await conectarDB();
    // creamos un usuario con new User y lo guardamos en la base de datos con save()
    const user = new User({ name, email, age });
    // user.save() es una promesa que retorna el usuario guardado
    const newUser = await user.save();
    await desconectarDB();
    res.json(newUser);
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});


// instalar
// npm i mongoose
// npm i express
// npm i dotenv
// npm i nodemon -D

// Actividad
// Crear un enpoint GET /products
// Crear un enpoint POST /product
// Crear un Schema para Product
// Crear un modelo para Product