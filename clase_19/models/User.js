const fs = require("fs/promises");

async function getAll(genero){
    console.log("ESTOY EN EL MODELO");
    const data = await fs.readFile("./usuarios.json", "utf-8");
    const usuarios = JSON.parse(data);
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.genero === genero);
    return usuariosFiltrados;
}

module.exports = {
    getAll
}