// elementos HTML
let divCaja = document.getElementById('caja')

// fetch

fetch('https://rickandmortyapi.com/api/location')
.then( (data)=>{
    return data.json()
}).then( (data)=>{
    // de la info que recibimos, nos quedamos con lo necesario (lugares en este caso)
    let lugares = data.results;
    // recorremos el array de lugares
    lugares.forEach((itemLugares) => {
        //al elemento que esta en divCaja le agregamos codigo html
        // += evita que se pisen los lugares, concatenamos cada lugar
        divCaja.innerHTML += `<div class="lugar">
                                <h2>Nombre:${itemLugares.name}</h2>
                                <p>Tipo: ${itemLugares.type}</p>
                                <p class="hola">Dimension: ${itemLugares.dimension}</p>
                            </div>`
    });  
})

// guardar en una variable un elemento html al que queremos agregarle datos de personajes
// hacemos un fetch, pedimos la info, la pasamos a json
// cuando este todo
// separo la parte que necesito (array de personajes)
// recorrer el array para acceder a la info de cada personaje
// al elemento html que me habia guardado le agrego más código html
        // esa info se trabaja como si fuera una string de siempre
