let tareas = [];

function mostrarTareas() {
    console.log(tareas);
}

function agregarTarea(nuevaTarea) {
    tareas.push(nuevaTarea);
}

function vaciarLista() {
    tareas = [];
}

// eliminar la ultima tarea (usar metodo pop)
// eliminar una tarea especifica usando el indice (usar metodo splice)

module.exports = { mostrarTareas, agregarTarea, vaciarLista }