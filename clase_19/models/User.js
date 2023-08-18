const fs = require("fs/promises");

async function getAll(genero){
    console.log("ESTOY EN EL MODELO");
    const data = await fs.readFile("./usuarios.json", "utf-8");
    const usuarios = JSON.parse(data);
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.genero === genero);
    return usuariosFiltrados;
}

async function createOne(newUser){
        const data = await fs.readFile("./usuarios.json", "utf-8");
        const usuarios = JSON.parse(data);
        usuarios.push(newUser);

        const error = await fs.writeFile("./usuarios.json", JSON.stringify(usuarios));
        let respuesta = "";
        if(error){
            respuesta = "No se pudo guardar el usuario";
        } else {
            respuesta = "Usuario guardado";
        }
        return respuesta;
}

module.exports = {
    getAll,
    createOne
}