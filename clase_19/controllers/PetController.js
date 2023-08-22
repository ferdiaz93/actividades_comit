const PetModel = require('../models/Pet');

async function getPets(req, res){
    const animal = req.query.animal;
    const perdido = req.query.perdido;
    const mascotas = await PetModel.getAll(animal, perdido);
    res.json(mascotas);
}

async function getPet(req, res){
    const nombre = req.params.nombre;
    const mascota = await PetModel.getPet(nombre);
    res.json(mascota);
}

async function createPet(req, res){
    const body = req.body; // req.body = {nombre: "nombre", animal: "animal", edad: "edad", perdido: "perdido"}
    const message = await PetModel.createPet(body); // llamamos a la funcion que guarda la mascota
    res.json({ mensaje: message }); // respondemos con un mensaje
}

module.exports = {
    getPets,
    getPet,
    createPet
}