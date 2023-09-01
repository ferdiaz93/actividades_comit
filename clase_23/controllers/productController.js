const { conectarDB, desconectarDB  } = require("../db/conection");
const Product = require("../db/schemas/ProductSchema");

const getAll = async (req, res) => {
    console.log(process.env);
    console.log("Nueva peticion en users")
    await conectarDB();
    // User.find es una promesa que retorna un array de usuarios
    const products = await Product.find({});
    await desconectarDB();
    res.json(products);
};

const create = async (req, res) => {
    const { name, description, price, quantity, color, category } = req.body;
    await conectarDB();
    // creamos un usuario con new User y lo guardamos en la base de datos con save()
    const product = new Product({ name, description, price, quantity, color, category });
    // user.save() es una promesa que retorna el usuario guardado
    const newProduct = await product.save();
    await desconectarDB();
    res.json(newProduct);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity, color } = req.body;
    await conectarDB();
    const response = await Product.findByIdAndUpdate(id, { name, description, price, quantity, color });
    await desconectarDB();
    res.json(response);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await conectarDB();
    const response = await Product.findByIdAndDelete(id);
    await desconectarDB();
    res.json(response);
};

module.exports = { getAll, create, update, deleteProduct }