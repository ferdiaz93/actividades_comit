const fs = require("fs/promises");

async function getAll(animal, perdido){
    const data = await fs.readFile("./mascotas.json", "utf-8");
    let mascotas = JSON.parse(data);
    if (animal) {
        mascotas = mascotas.filter((mascota) => mascota.animal === animal);
    }
    if (perdido) {
        let estaPerdido = perdido === "true" ? true : false;
        mascotas = mascotas.filter((mascota) => mascota.perdido === estaPerdido);
    }
    return mascotas;
}

module.exports = {
    getAll
};