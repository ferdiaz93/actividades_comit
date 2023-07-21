const formulario = document.getElementById('formulario');
const ulElement = document.getElementById('lista');
let contador = 3;

let usuarios = [
    {
        id: 1,
        email: "fer@gmail.com",
        password: "aaaaa"
    },
    {
        id: 2,
        email: "jose@gmail.com",
        password: "aaaaa"
    },
];

usuarios.forEach(function(usuario){
    let li = document.createElement('li');
    li.innerText = usuario.email;
    ulElement.appendChild(li);
});

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let emailNuevo = formulario['email'].value;
    let contraNueva = formulario['contraseña'].value;
    
    if(emailNuevo === ''){
        alert('El email esta vacio');
        return;
    };
    if(emailNuevo.length < 3){
        alert('Minimo 3 letras');
        return;
    };
    if(usuarios.some(usuario => usuario.email === emailNuevo)){
        alert('Usuario ya registrado');
        return;
    }

    let nuevoUsuario = {
        id: contador,
        email: emailNuevo,
        password: contraNueva
    };
    usuarios.push(nuevoUsuario);
    contador++;
    let li = document.createElement('li');
    li.innerText = emailNuevo;
    ulElement.appendChild(li);
})