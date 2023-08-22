const UserModel = require('../models/User');

async function getUsers(req, res){
    console.log("ESTOY EN EL CONTROLADOR");
    const { genero } = req.query;
    const usuariosFiltrados = await UserModel.getAll(genero);
    res.json(usuariosFiltrados);
}

async function createUser(req, res){
    const body = req.body;
    const response = await UserModel.createOne(body);
    res.json({ mensaje: response });
}

module.exports = {
    getUsers,
    createUser
};