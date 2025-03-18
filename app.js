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

//Controlador de que esta correcto los nombres

    if(!nombreAmigo.value){
        alert("Valor invalido... Por favor ingrese un nombre")
        return;
    }else{
        //Si la cadena no esta vacia agrego el nombre
        amigos.push(nombreAmigo.value);

    };

    //Agregamos los nombres de las personas al ser añadidas
    visualAmigos.innerHTML += `<li> ${nombreAmigo.value} </li>`;
};

//Realizamos el funcionamiento de sortear amigo
function sortearAmigo(){
    
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    let posAleatoria = Math.floor((Math.random() * amigos.length));
    let amigoSecreto = amigos[posAleatoria];
    let limpiarLista = document.getElementById("listaAmigos");
    //Realizamos la visualizacion del ganador del amigo secreto

    ganador.innerHTML = `<li>El ganador del amigo secreto es: ${amigoSecreto}</li>`

    //Limpiamos los nombres y al tener ya un ganador, tambien los anteriores participantes 
    limpiarLista.innerHTML = "";
    amigos= [];
    return
};

