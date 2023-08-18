const PetModel = require('../models/Pet');

async function getPets(req, res){
    const animal = req.query.animal;
    const perdido = req.query.perdido;
    const mascotas = await PetModel.getAll(animal, perdido);
    res.json(mascotas);
}

module.exports = {
    getPets
}