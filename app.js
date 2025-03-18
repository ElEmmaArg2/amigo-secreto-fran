// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializamos la lista donde guardaremos los nombres de los amigos
let amigos = [];

//Elegimos los archivos del html
let nombreAmigo = document.getElementById("amigo");

//Creamos una variable para tener el lugar donde se pondra la lista de amigos
let visualAmigos = document.getElementById("listaAmigos");


//Hacemos una funcion para agregar a los amigos una vez
//Que se apriete el boton
function agregarAmigo(){
    amigos.push(nombreAmigo.value);

    //Agregamos los nombres de las personas al ser añadidas
    visualAmigos.innerHTML += `<l1> ${nombreAmigo.value} </l1>`;
};