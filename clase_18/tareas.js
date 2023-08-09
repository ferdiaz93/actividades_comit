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

// eliminar la ultima tarea
// eliminar una tarea especifica usando el indice

module.exports = { mostrarTareas, agregarTarea, vaciarLista }