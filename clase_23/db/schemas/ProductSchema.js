const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Crear un Schema para User
const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    color: String,
    category: { type: String, default: "Sin categoria"}
});

// Crear un modelo para User ( el primer parametro es el nombre de la coleccion en la base de datos en SINGULAR)
const Product = model('Product', ProductSchema);

module.exports = Product;