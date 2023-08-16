const express = require("express");
const app = express();
const fs = require("fs/promises");

//middlewares
app.use(express.json());

app.get('/', (req, res) => {
    console.log("test")
    res.send("Hola mundo");
});

app.get('/usuarios', async (req, res) => {
    const { genero } = req.query;
    const data = await fs.readFile("./usuarios.json", "utf-8");
    const usuarios = JSON.parse(data);
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.genero === genero);
    res.json(usuariosFiltrados);
});

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

// -Crear un endpoint GET /mascotas/:nombre que filtre por nombre de la mascota y devuelva un json con los datos de esa mascota

// -Crear un endpoint POST /mascotas que agregue una mascota al json



app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080");
});