// -Crear un formulario con los inputs “titulo”, “body” y “userId” con un boton enviar. -> HTML
// -Darle al formulario el evento submit (addEventListener)
const fomulario = document.getElementById('formulario');
const mensajeEl = document.getElementById('mensaje');

fomulario.addEventListener('submit', function(event){
    event.preventDefault();
    // capturar los valores de los inputs
    let title = fomulario['title'].value;
    let body = fomulario['body'].value;
    let userId = fomulario['userId'].value;
    console.log({title, body, userId});
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        })
    })
    .then(response => {
        console.log(response);
        mostrarMensaje('Salio todo bien', true)
    })
    .catch(error => {
        console.log(error)
        mostrarMensaje('Salio todo mal', false)
    })
})

function mostrarMensaje(texto, todoOk){
    const span = document.createElement('span');
    span.innerText = texto;
    if(todoOk){
        // -Si la consulta sale bien mostrar un mensaje en verde 
        span.setAttribute('class', 'success');
    } else {
        // -Si la consulta sale mal, mostrar un mensaje en rojo debajo del formulario
        span.setAttribute('class', 'error');
    }
    mensajeEl.appendChild(span);
}