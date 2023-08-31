const { conectarDB, desconectarDB  } = require("../db/conection");
const User = require("../db/schemas/UserSchema");

const getAll = async (req, res) => {
    console.log(process.env);
    console.log("Nueva peticion en users")
    await conectarDB();
    // User.find es una promesa que retorna un array de usuarios
    const users = await User.find({});
    await desconectarDB();
    res.json(users);
};

const create = async (req, res) => {
    const { name, email, age } = req.body;
    await conectarDB();
    // creamos un usuario con new User y lo guardamos en la base de datos con save()
    const user = new User({ name, email, age });
    // user.save() es una promesa que retorna el usuario guardado
    const newUser = await user.save();
    await desconectarDB();
    res.json(newUser);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    await conectarDB();
    const response = await User.findByIdAndUpdate(id, { name, email, age });
    await desconectarDB();
    res.json(response);
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await conectarDB();
    const response = await User.findByIdAndDelete(id);
    await desconectarDB();
    res.json(response);
};

module.exports = { getAll, create, update, deleteUser }