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