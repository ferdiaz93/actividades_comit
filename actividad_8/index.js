const ulElement = document.getElementById('lista');
const btnElement = document.getElementById('boton');

btnElement.addEventListener('click', function(){
    let texto = prompt("Escribir nombre");
    let liElement = document.createElement('li');
    liElement.innerText = texto;
    ulElement.appendChild(liElement);
});