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

async function getPet(nombre){
    const data = await fs.readFile("./mascotas.json", "utf-8");
    let mascotas = JSON.parse(data);
    let mascota = mascotas.find((mascota) => mascota.nombre === nombre);
    return mascota
}

async function createPet(body){
    const data = await fs.readFile("./mascotas.json", "utf-8"); // dentro de data se encuentra el array de mascotas pero en formato texto
    const mascotas = JSON.parse(data); // convertimos el texto a un array de objetos
    mascotas.push(body); // agregamos la mascota al array
    const error = await fs.writeFile("./mascotas.json", JSON.stringify(mascotas)); // convertimos el array de objetos a texto y lo guardamos en el archivo mascotas.json
    if (error) {
        return "Error al guardar la mascota"; // si hay un error devolvemos un mensaje de error
    }
    return "Mascota guardada con exito";
}

module.exports = {
    getAll,
    getPet,
    createPet
};