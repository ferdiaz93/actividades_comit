// function pedirDatos(){
//     console.log("Promesa creada");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             let misDatos = {name: "fernando", edad: 29};
//             if(misDatos.edad > 18){
//                 resolve(misDatos)
//             } else {
//                 reject("No es mayor de edad");
//             }
//         }, 5000);
//     })
// }



// miPromesa
//     .then((respuesta) => {
//         console.log("resuelta", respuesta);
//     })
//     .catch((respuesta) => {
//         console.log("rechazada", respuesta);
//     })
//     .finally(() => {
//         console.log("promesa terminada")
//     })

const ulElement = document.getElementById('lista');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usuarios) => {
        console.log(usuarios);
        usuarios.forEach(usuario => crearItemDeUsuario(usuario));
    })

function crearItemDeUsuario(usuario){
    let liElement = document.createElement('li');
    let buttonElement = document.createElement('button');
    buttonElement.innerText = usuario.name;
    
    liElement.addEventListener('click', function(){
        console.log(usuario.id)
        mostrarInfoDeUsuario(usuario.id)
    })
    
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);

}

function mostrarInfoDeUsuario(idUser){
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + idUser)
    .then(response => response.json())
    .then((albums) => {
        console.log(albums);
    })
}