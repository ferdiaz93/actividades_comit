async function enviarDatos(){
    console.log('iniciando POST')
    try{
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
    } catch (error){
        console.log(error);
    }
}

enviarDatos();