// destructuring
// const persona = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     edad: 30,
// }

// const { nombre, edad } = persona;
// console.log(nombre, edad);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [nueve] = numeros;

// console.log(nueve);

// const calculadora = require('./calculadora');
// console.log(calculadora.sumar(1, 2));
// console.log(calculadora.restar(1, 2));


// -Crear dos archivos, index.js y tareas.js
// -En tareas.js  -> Definir una variable con un array vacio y las funciones :

// mostrarTareas() => muestra por consola todas las tareas
// agregarTarea(tarea) => agrega una tarea, que viene por parametro, al array(push) con la siguiente estructura:
// tarea = {description: 'pasear al perro', done: false}

// vaciarLista() => vacia el array

// -Exportar estas funciones => module.exports = { sumar, restar }
// -Importar estas funciones en el archivo index.js y usarlas => require('')

// Codigo de ejemplo:
// const calculadora = require('./utilidades/calculadora');
// console.log(calculadora.sumar(1, 2));

const funciones = require('./tareas');
funciones.mostrarTareas();
funciones.agregarTarea({description: "pasear al perro", done: false});
funciones.agregarTarea({description: "salir a correr", done: false});
funciones.mostrarTareas();
funciones.vaciarLista();
funciones.mostrarTareas();
