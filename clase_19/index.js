const express = require("express");
const app = express();

app.get('/', function(request, response){
    console.log("Recibimos una peticion");
});

app.get('/perfil', function(request, response){
    console.log("Recibimos una peticion en PERFIL");
});

app.listen(3000, () => {
    console.log("Servidor corriendo");
})