// const formulario = document.getElementById("formulario");
// const inputName = document.getElementById("name");
// const inputLastname = document.getElementById("lastname");

// formulario.addEventListener("submit", function(event){
//     event.preventDefault();
//     let nombre = formulario['nombre'].value;
//     let apellido = formulario['apellido'].value;
//     // let nombre = inputName.value;
//     // let apellido = inputLastname.value;

//     console.log(nombre);
//     console.log(apellido);
// });

const ulElement = document.getElementById('lista-usuarios');
const formElement = document.getElementById('formulario');
let usuarios = [
    {
        nombre: "Pablo",
        apellido: "Gonzales"
    },
    {
        nombre: "Juan",
        apellido: "Perez"
    }
];

function actualizarListaDeUsuarios(){
    ulElement.innerHTML = "";
    usuarios.forEach(function(usuario){
        let li = document.createElement('li');
        li.innerText = usuario.nombre + " " + usuario.apellido;
        ulElement.appendChild(li);
    });
}

formElement.addEventListener('submit', function(event){
    event.preventDefault();
    let nombreInput = formElement['nombre'].value;
    let apellidoInput = formElement['apellido'].value;
    let nuevoUsuario = {
        nombre: nombreInput,
        apellido: apellidoInput
    };
    usuarios.push(nuevoUsuario);
    actualizarListaDeUsuarios();
});

actualizarListaDeUsuarios();