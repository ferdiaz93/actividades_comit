const express = require("express");
const app = express();
const fs = require("fs/promises");

// controllers
const userController = require("./controllers/UserController");
const petController = require("./controllers/PetController");

//middlewares
app.use(express.json());

app.get('/', (req, res) => {
    console.log("test")
    res.send("Hola mundo");
});

app.get('/usuarios', userController.getUsers);
app.post('/usuarios', userController.createUser);

// -Crear un archivo JSON que contenga un array de Mascotas(cada mascota debe tener un ‘nombre’,  ‘animal’, ‘edad’, ‘perdido’)

// -Crear un endpoint GET /mascotas que filtre por parametros (animal/perdido) y responda un json con las mascotas filtradas
app.get('/mascotas', petController.getPets);
// -Crear un endpoint GET /mascotas/:nombre que filtre por nombre de la mascota y devuelva un json con los datos de esa mascota
app.get('/mascotas/:nombre', petController.getPet)

// -Crear un endpoint POST /mascotas que agregue una mascota al json
app.post('/mascotas', petController.createPet);


app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});