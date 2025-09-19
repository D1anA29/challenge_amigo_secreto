// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombreAmigo;
let listaAmigos;
let cantidadAmigos;

// Implementa una función para agregar amigos

/**
 * Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
 */

function agregarAmigos() {
    nombreAmigo = document.getElementById ("amigo").value;
    if (agregarAmigos.trim() ===""){
        alert("el campo está vacio, agrega un nombre");

    } else {
        amigos.push (nombreAmigo);
        document.querySelector("#amigo").value = ""; 

    }
}
        //Nombre de la funcion mostrar lista amigos

 // Implementa una función para actualizar la lista de amigos

 /**
  * Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> 
  * dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
  */
    
function mostrarListaAmigo(){
    listaAmigos = querySelector ("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++){
        const element = amigos[index];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild (listaHTML);

    }
}
    

// Implementa una función para sortear los amigos

/**
 * Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
 * Usa Math.random() y Math.floor() para obtener un índice aleatorio.
 */

function sortearAmigo (){
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
    } else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];

    }
}
