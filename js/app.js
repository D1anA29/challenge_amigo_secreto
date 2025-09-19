// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let nombreAmigo;

// Implementa una función para agregar amigos

/**
 * Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
 */

function agregarAmigos() {
    agregarAmigos = document.getElementById ("amigo").value;
    if (agregarAmigos.trim() ===""){
        alert("el campo está vacio, agrega un nombre");

    } else {
        amigos.push (nombreAmigo);
        document.querySelector("#amigo").value = ""; 
        //Nombre de la funcion mostrar lista amigos

    
    }

}
