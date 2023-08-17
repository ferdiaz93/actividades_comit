const UserModel = require('../models/User');

async function getUsers(req, res){
    console.log("ESTOY EN EL CONTROLADOR");
    const { genero } = req.query;
    const usuariosFiltrados = await UserModel.getAll(genero);
    res.json(usuariosFiltrados);
}

module.exports = {
    getUsers
};