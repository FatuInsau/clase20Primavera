// Objeto Document
// Nos permite acceder a elementos del html (accedemos a una maqueta llamada DOM)

// para atrapar un elemento del html

// querySelector
// devuelve el primer elemento que encuentra
// recibe etiquetas, clases (.) e ids (#)
let parrafo = document.querySelector('#nombre')

// querySelectorAll
// devuelve un elemento o un array de elementos
// recibe etiquetas, clases (.) e ids (#)
let selectorAll= document.querySelectorAll('p')

// getElementById
// nos devuelve el elemento que tenga el id que le pasemos
// escribimos el nombre el id
let elementById=document.getElementById('nombre')

// getElementsByClassName
// nos devuelve un elemento o un array de elementos que tengan la clase que le pasemos
let elementByClass=document.getElementsByClassName('hola')




// ejemplo
let divCaja = document.getElementById('caja')

// forma de agregar codigo html a un elemento

divCaja.innerHTML='<p>Vengo de Javascript!!!</p>';