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
    const users = await User.find({});
    await desconectarDB();
    res.json(users);
});

app.post('/user', async (req, res) => {
    const { name, email, age } = req.body;
    await conectarDB();
    const user = new User({ name, email, age });
    const newUser = await user.save();
    await desconectarDB();
    res.json(newUser);
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});