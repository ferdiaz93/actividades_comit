// ACTIVIDAD CALCULADORA

// const calculadora = function(num1, num2, operador){
//     if(operador === '+') return (num1 + num2);
//     if(operador === '-') return (num1 - num2);
//     if(operador === '*') return (num1 * num2);
//     if(operador === '/') return (num1 / num2);
// }


// ACTIVIDAD FILTRAR ARRAY DE NUMEROS POR PARES O IMPARES

// function filtrarArray(arrayDeNumeros, filtro){
//     let arrayFiltrado = [];
//     if(filtro === 'par' || filtro === 'impar' ){
//         for(let numero of arrayDeNumeros){
//             if(filtro === 'par' && (numero % 2) === 0) arrayFiltrado.push(numero);
//             if(filtro === 'impar' && (numero % 2) !== 0) arrayFiltrado.push(numero);
//         }
//         console.log(arrayFiltrado);
//     } else {
//         console.log('No se aplico ningun filtro');
//     }
// }

// ACTIVIDAD CALCULAR PROMEDIO

// function calcularPromedio(arrayDeNumeros){
//     let total = 0;
//     for(let numero of arrayDeNumeros){
//         total = numero + total;
//     }
//     let promedio = total / arrayDeNumeros.length;
//     console.log(promedio);
// }

// PROPIEDADES Y FUNCIONES EN OBJETOS
// let persona = {
//     nombre: "fernando",
//     edad: 29,
//     apellido: "Diaz",
//     saludar: function(){
//         console.log("hola soy " + this.nombre);
//     }
// }

// ACTIVIDAD CALCULADORA USANDO OBJETO Y METODOS
// let calculadora = {
//     sumar: function(num1, num2){
//         console.log(num1 + num2);
//     },
//     restar: function(num1, num2){
//         console.log(num1 - num2);
//     },
//     multiplicar: function(num1, num2){
//         console.log(num1 * num2);
//     },
//     dividir: function(num1, num2){
//         console.log(num1 / num2);
//     }
// };


// function encontrarPalabraMasLarga(frase){
//     let arrayDePalabras = frase.split(" ");
//     let palabraMasLarga = "";
//     for(let palabra of arrayDePalabras){
//         if(palabra.length > palabraMasLarga.length){
//             palabraMasLarga = palabra;
//         }
//     }
//     console.log(palabraMasLarga);
// }

// let persona1 = {
//     nombre: "Pedro",
//     edad: 15
// }

// let persona2 = {
//     nombre: "Ana",
//     edad: 28,
//     esMayorDeEdad: function(){
//         if(persona.edad >= 18){
//             console.log(`${persona.nombre} es mayor de edad.`)
//         } else {
//             console.log(`${persona.nombre} no es mayor de edad.`)
//         }
//     }
// }

// function esMayorDeEdad(persona){
//     if(persona.edad >= 18){
//         console.log(`${persona.nombre} es mayor de edad.`)
//     } else {
//         console.log(`${persona.nombre} no es mayor de edad.`)
//     }
// }


// esMayorDeEdad(persona1);
// esMayorDeEdad(persona2);


// let numeros = [1, 2, 3, 4];
// let numerosDuplicados = numeros.filter((numero) => {
//     return numero >= 3;
// })
// console.log(numerosDuplicados)


// let persona1 = {
//     nombre: "Juan",
//     anioDeNacimiento: 1993
// }

// let persona2 = {
//     nombre: "Pedro",
//     anioDeNacimiento: 2000,
//     saludar: function(){

//     }
// }

// function agregarEdad(persona){
//     persona.edad = 2023 - persona.anioDeNacimiento;
// }
// let persona1 = {
//     nombre: "fer",
//     edad: 25
// }
// let persona2 = {
//     nombre: "fer",
//     edad: 25
// }
// let personas = [persona1, persona2];

// function filtrarMayoresDeEdad(personasArray){
//     let filtrados = [];
//     for(let persona of personasArray){
//         if(persona.edad >= 18){
//             filtrados.push(persona);
//         }
//     }
//     // let filtrados = personasArray.filter(persona => returnpersona.edad >= 18);
//     console.log(filtrados);
// }
// filtrarMayoresDeEdad(personas);


// const elementoTitulo = document.getElementById("titulo");
// const seccionNueva = document.getElementById("nuevaSeccion");
// const botonAgregar = document.getElementById("boton");
// const botonCambiarColor = document.getElementById("botonEstilos");
// let darkMode = false;

// // console.log(elementoTitulo);
// elementoTitulo.innerText = "hola";

// botonAgregar.addEventListener("click", function(){
//     let subtitulo = document.createElement('h2');
//     subtitulo.innerText = "hola soy un h2";
//     seccionNueva.appendChild(subtitulo);
// });

// botonCambiarColor.addEventListener("mouseenter", function(){
    
//     // document.body.style.backgroundColor = darkMode ? "white" : "black";
//     // darkMode = !darkMode;
    
//     if(darkMode){
//         elementoTitulo.classList.add('oculto');
//         darkMode = false;
//         // document.body.style.backgroundColor = "white";
//     } else {
//         elementoTitulo.classList.remove('oculto');
//         darkMode = true;
//         // document.body.style.backgroundColor = "black";
//     }
// });
