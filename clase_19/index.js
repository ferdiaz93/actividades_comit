const express = require("express");
const app = express();
const fs = require("fs/promises");

// controllers
const userController = require("./controllers/UserController");

//middlewares
app.use(express.json());

app.get('/', (req, res) => {
    console.log("test")
    res.send("Hola mundo");
});

app.get('/usuarios', userController.getUsers);

app.post('/usuarios', async (req, res) => {
    const body = req.body;
    const data = await fs.readFile("./usuarios.json", "utf-8");
    const usuarios = JSON.parse(data);

    usuarios.push(body);

    const error = await fs.writeFile("./usuarios.json", JSON.stringify(usuarios));
    if (error) { res.json({ error: "No se pudo guardar el usuario" }) }
    res.json({ mensaje: "Usuario guardado" });
})

// -Crear un archivo JSON que contenga un array de Mascotas(cada mascota debe tener un ‘nombre’,  ‘animal’, ‘edad’, ‘perdido’)

// -Crear un endpoint GET /mascotas que filtre por parametros (animal/perdido) y responda un json con las mascotas filtradas
app.get('/mascotas', async (req, res) => {
    const animal = req.query.animal;
    const perdido = req.query.perdido;
    const data = await fs.readFile("./mascotas.json", "utf-8");
    let mascotas = JSON.parse(data);
    if (animal) {
        mascotas = mascotas.filter((mascota) => mascota.animal === animal);
    }
    if (perdido) {
        let estaPerdido = perdido === "true" ? true : false;
        mascotas = mascotas.filter((mascota) => mascota.perdido === estaPerdido);
    }
    res.json(mascotas);
})
// -Crear un endpoint GET /mascotas/:nombre que filtre por nombre de la mascota y devuelva un json con los datos de esa mascota
app.get('/mascotas/:nombre', async (req, res) => {
    const nombre = req.params.nombre;
    const data = await fs.readFile("./mascotas.json", "utf-8");
    let mascotas = JSON.parse(data);
    let mascota = mascotas.find((mascota) => mascota.nombre === nombre);
    res.json(mascota);
})

// -Crear un endpoint POST /mascotas que agregue una mascota al json
app.post('/mascotas', async (req, res) => {
    const body = req.body; // req.body = {nombre: "nombre", animal: "animal", edad: "edad", perdido: "perdido"}
    const data = await fs.readFile("./mascotas.json", "utf-8"); // dentro de data se encuentra el array de mascotas pero en formato texto
    const mascotas = JSON.parse(data); // convertimos el texto a un array de objetos
    mascotas.push(body); // agregamos la mascota al array
    const error = await fs.writeFile("./mascotas.json", JSON.stringify(mascotas)); // convertimos el array de objetos a texto y lo guardamos en el archivo mascotas.json
    if (error) { res.json({ error: "No se pudo guardar la mascota" }) }
    res.json({ mensaje: "Mascota guardada" }); // respondemos con un mensaje
});


app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});