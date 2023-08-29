const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: Number
});

const User = model('User', UserSchema);

module.exports = User;