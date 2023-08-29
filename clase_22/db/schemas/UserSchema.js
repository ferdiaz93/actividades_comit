const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Crear un Schema para User
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: Number
});

// Crear un modelo para User ( el primer parametro es el nombre de la coleccion en la base de datos en SINGULAR)
const User = model('User', UserSchema);

module.exports = User;