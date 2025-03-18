// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicializamos la lista donde guardaremos los nombres de los amigos
let amigos = [];

//Elegimos los archivos del html
let nombreAmigo = document.getElementById("amigo");

//Creamos una variable para tener el lugar donde se pondra la lista de amigos
let visualAmigos = document.getElementById("listaAmigos");

//Inicializamos la variable del ganador
let ganador = document.getElementById("resultado")

//Hacemos una funcion para agregar a los amigos una vez
//Que se apriete el boton
function agregarAmigo(){
    amigos.push(nombreAmigo.value);


//Controlador de que esta correcto los nombres

    if(!nombreAmigo.value){
        alert("Valor invalido")
    }

    //Agregamos los nombres de las personas al ser añadidas
    visualAmigos.innerHTML += `<li> ${nombreAmigo.value} </li>`;
};

//Realizamos el funcionamiento de sortear amigo
function sortearAmigo(){
    let posAleatoria = Math.floor((Math.random() * amigos.length));
    let amigoSecreto = amigos[posAleatoria];

    //Realizamos la visualizacion del ganador del amigo secreto

    ganador.innerHTML = `<li>El ganador del amigo secreto es: ${amigoSecreto}</li>`



};
