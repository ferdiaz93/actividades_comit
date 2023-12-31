# Actividades ComIT

## Actividad 1

Escribe un codigo que recorra los números del 1 al 10 usando un bucle for. Por cada número, verifica si es par o impar utilizando una estructura condicional if. Imprime un mensaje indicando si el número es par o impar.

Ejemplo de salida:
```javascript
1 es impar
2 es par
3 es impar
4 es par
5 es impar
6 es par
7 es impar
8 es par
9 es impar
10 es par
```

## Solucion
```javascript
for(let contador = 1; contador <= 10; contador++){
    if(contador % 2 === 0){
        console.log(contador, "es par");
    } else {
        console.log(contador, "es impar");
    }
}
```

## Actividad 2

Guardar un numero en una variable. Utiliza un bucle for para recorrer los números del 1 al 10 y muestra la tabla de multiplicar del número guardado. Utiliza un condicional if para verificar si el número es válido (entre 1 y 10).

Ejemplo de entrada:

```javascript
Numero guardado : 5
```
Ejemplo de salida:
```javascript
La tabla del 5 es la siguiente
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

Ejemplo de entrada:

```javascript
Numero guardado : 12
```
Ejemplo de salida:
```javascript
El numero no es valido, debe ser un numero entre 1 y 10
```
## Solucion
```javascript
let numero = 5;

if(numero >= 1 && numero <= 10){
    console.log(`La tabla del ${numero} es:`);
    for(let contador = 1; contador <= 10; contador++){
        let resultado = numero * contador;
        console.log(`${numero} x ${contador} = ${resultado}`);
    }
} else {
    console.log("El numero no es valido, debe ser un numero entre 1 y 10");
}
```

## Actividad 3

Encontrar la palabra mas larga de una frase.
Crear una funcion llamada encontrarPalabraMasLarga que reciba como parametro una frase (string) y usar el metodo split [(más informacion)](https://www.w3schools.com/jsref/jsref_split.asp#) para dividir la frase en un array de palabras. Luego, recorrer el array y encontrar la palabra mas larga y retornarla o mostrarla por consola.

Ejemplo de entrada:

```javascript
encontrarPalabraMasLarga("El elefante es un animal muy grande");
```
Ejemplo de salida:
```javascript
"elefante"
```

## Actividad 4

Crear dos objetos llamados persona1 y persona2 con los siguientes datos: nombre, edad.
El primero con el nombre Pedro y edad 15 y el segundo con el nombre Ana y edad 28.
Crear una funcion llamada esMayorDeEdad que reciba como parametro un objeto y muestre por consola el siguiente mensaje "NOMBRE es mayor de edad" en caso de que sea mayor o "NOMBRE no es mayor de edad" en caso de que no.

Ejemplo de entrada:
```javascript
esMayorDeEdad(persona1);
esMayorDeEdad(persona2);
```
Ejemplo de salida:
```javascript
"Pedro no es mayor de edad"
"Ana es mayor de edad"
```

## Actividad 5

Crear dos objetos, persona1 y persona2, ambos con la propiedad nombre y anioDeNacimiento.
Crear una funcion agregarEdad que reciba como parametro una persona. En base a la fecha de nacimiento, agregar a esta persona la propiedad edad con el numero correspondiente.
Al terminar mostrar por consola estos dos objetos

Ejemplo de entrada:
```javascript
agregarEdad(persona1);
agregarEdad(persona2);
```
Ejemplo de salida:
```javascript
persona1 = {nombre: "Pedro", anioDeNacimiento: 2005, edad: 15}
persona2 = {nombre: "Ana", anioDeNacimiento: 1992, edad: 28}
```
## Actividad 6

Filtrar mayores de edad. Crear una funcion llamada filtrarMayoresDeEdad que reciba como parametro un array de objetos personas y retorne un array con las personas mayores de edad.

Ejemplo de entrada:
```javascript
filtrarMayoresDeEdad([persona1, persona2]);
```
Ejemplo de salida:
```javascript
[{nombre: "Ana", edad: 28}]
```

## Actividad 7

Repetir la actividad 5 pero aplicando el metodo forEach. Crear una funcion agregarEdad que reciba como parametro un array de personas. En base a la fecha de nacimiento, agregar a cada persona la propiedad edad con el numero correspondiente.

Ejemplo de entrada:
```javascript
agregarEdad([persona1, persona2]);
```
Ejemplo de salida:
```javascript
[{nombre: "Pedro", anioDeNacimiento: 2005, edad: 15}, {nombre: "Ana", anioDeNacimiento: 1992, edad: 28}]
```

## Actividad 8

Crear un archivo html con su estructura basica. Crear un elemento ul con el id lista.
Crear un boton que al hacer click ejecute una funcion, esta funcion deberia crear un elemento li y agregarlo al ul. El elemento li deberia contener un numero que se va a ir incrementando en 1 cada vez que se haga click en el boton.

extra:
En vez de usar un numero para el contendio de cada li, usar un prompt [(mas info)](https://www.w3schools.com/jsref/met_win_prompt.asp#) para pedirle al usuario que ingrese un texto y mostrarlo en el li.

Actualizado
