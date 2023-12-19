// guardamos un elemento html dentro de una variable
let divPersonajes = document.querySelector('.personajes')


fetch('https://rickandmortyapi.com/api/character')
.then((data)=>{
    return data.json();
}).then((data)=>{
    let personajes = data.results;
    personajes.forEach((personajeObj)=>{
        divPersonajes.innerHTML+=`<p>Nombre: ${personajeObj.name}</p>`
    })
})