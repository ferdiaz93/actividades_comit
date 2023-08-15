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
const ulElementAlbums = document.getElementById('lista-albums');
const sectionGrilla = document.getElementById('grilla-fotos');

async function obtenerUsuarios() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let usuarios = await response.json();
        console.log(usuarios);
        usuarios.forEach(usuario => crearItemDeUsuario(usuario));
    } catch(error){
        console.log(error);
    }
}

function obtenerUsuariosPromesa(){
    console.log('iniciando fetch');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usuarios) => {
        console.log(usuarios);
        // usuarios.forEach(usuario => crearItemDeUsuario(usuario));
    })
    .catch(error => {

    })
    console.log('fetch finalizado')
}

obtenerUsuarios();

function crearItemDeUsuario(usuario){
    let liElement = document.createElement('li');
    let buttonElement = document.createElement('button');
    buttonElement.innerText = usuario.name;
    
    liElement.addEventListener('click', function(){
        console.log(usuario.id)
        mostrarAlbumsDelUsuario(usuario.id)
    })
    
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);

}

async function mostrarAlbumsDelUsuario(idUser){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + idUser)
        const albums = await response.json();
        console.log(albums);
        ulElementAlbums.innerHTML = "";
        albums.forEach(function(album){
            let li = document.createElement('li');
            li.innerText = album.title;
            ulElementAlbums.appendChild(li);
            li.addEventListener('click', function() {
                console.log(album.id);
                mostrarFotosDelAlbum(album.id);
            })
        })
    } catch(error){
        console.error(error);
    }
}

async function mostrarFotosDelAlbum(idAlbum){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + idAlbum)
        const photos = await response.json();
        photos.forEach(function(photo){
            const article = document.createElement('article');
            const img = document.createElement('img');
            const span = document.createElement('span');
            
            span.innerText = photo.title;
            img.setAttribute('src', photo.url);
            article.appendChild(img);
            article.appendChild(span);
            sectionGrilla.appendChild(article);
        });
    } catch(error){
        console.error(error);
    }
}

async function enviarDatos(){
    console.log('iniciando POST')
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'test',
            body: 'hola',
            userId: 1,
        })
    });
    const result = await response.json();
    console.log(result);
}

enviarDatos();