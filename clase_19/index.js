const express = require("express");
const app = express();
// -Crear un array de objetos que contenga ID, NOMBRE, APELLIDO, PROFESION
let usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", profesion: "Programador"},
    {id: 2, nombre: "Pedro", apellido: "Diaz", profesion: "Contador"},
    {id: 3, nombre: "Carlos", apellido: "Diaz", profesion: "Programador"},
    {id: 4, nombre: "Ana", apellido: "Diaz", profesion: "Abogada"},
];
// -Crear un endpoint /usuarios que filtre por parametros (profesion) y responda un json con los usuarios filtrados
// para filtrar usar el metodo filter de los arrays

// -Crear un endpoint /usuarios/:id que filtre por ID del usuario y devuelva un json con los datos de ese usuario
// para filtrar usar el metodo find de los arrays

app.get('/', function(request, response){
    console.log("Recibimos una peticion");
});

app.get('/perfil/:id', function(req, res){
    // PARAMS
    const id = req.params.id;
    console.log(id)
    console.log("Recibimos una peticion en PERFIL");
    res.send("Hola " + id);
});

app.get('/usuarios', function(req, res){
    // QUERY
    const { profesion } = req.query;
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.profesion.toLowerCase() === profesion.toLowerCase())
    res.json(usuariosFiltrados);
});

app.get('/usuarios/:id', function(req, res){
    // PARAMS
    const { id } = req.params;
    const userFiltered = usuarios.find((usuario) => usuario.id === parseInt(id));
    res.json(userFiltered);
});

app.listen(3000, () => {
    console.log("Servidor corriendo");
})