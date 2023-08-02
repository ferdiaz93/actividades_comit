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
        mostrarAlbumsDelUsuario(usuario.id)
    })
    
    liElement.appendChild(buttonElement);
    ulElement.appendChild(liElement);

}

function mostrarAlbumsDelUsuario(idUser){
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + idUser)
    .then(response => response.json())
    .then((albums) => {
        console.log(albums);
        ulElementAlbums.innerHTML = "";
        albums.forEach(function(album){
            // crear un li (document.createElement)
            let li = document.createElement('li');
            // agregar contenido (album.title) con el .innerText 
            li.innerText = album.title;
            // insertar el li dentro de un nuevo ul (capturar nuevo ul)
            ulElementAlbums.appendChild(li);
            // agregar el evento click al li, que al hacer click mostrar el id del album por consola
            li.addEventListener('click', function() {
                console.log(album.id);
                mostrarFotosDelAlbum(album.id);
            })
        })
    })
}

function mostrarFotosDelAlbum(idAlbum){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + idAlbum)
        .then(response => response.json())
        .then((photos) => {
            console.log(photos);
            //recorrer las fotos con un forEach y por cada uno hacer lo siguiente:
            photos.forEach(function(photo){
                //crear un article
                const article = document.createElement('article');
                //crear un img
                const img = document.createElement('img');
                //crear un h4
                const span = document.createElement('span');
                
                //al h4 darle contenido (title)
                span.innerText = photo.title;
                //img agregar el atributo 'src' y el valor debe ser la url
                img.setAttribute('src', photo.url);
                // insertar los elementos dentro del article
                article.appendChild(img);
                article.appendChild(span);
                //insertar el article dentro de una section (que debemos capturar de nuestro html)
                sectionGrilla.appendChild(article);
            });
        })
}