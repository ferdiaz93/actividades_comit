require('dotenv').config();
const express = require('express');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/users', userController.getAll);
app.post('/user', userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.deleteUser);


// - Copiar esta carpeta (clase 23)
// - Instalar dependencias con el comando 'npm install'
// - Crear el schema de Producto
// - Crear el controlador de Producto
// - Crear los endpoints de Producto
// - TOMAR DE REFERENCIA EL CODIGO DE USUARIO
app.get('/products', productController.getAll);
app.post('/product', productController.create);
app.put("/product/:id", productController.update);
app.delete("/product/:id", productController.deleteProduct);



app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});


// instalar
// npm i mongoose
// npm i express
// npm i dotenv
// npm i nodemon -D

// Actividad
// Crear un enpoint GET /products
// Crear un enpoint POST /product
// Crear un Schema para Product
// Crear un modelo para Product