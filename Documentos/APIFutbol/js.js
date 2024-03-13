// client.js

document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://pmgha.duckdns.org:3000/api/futbol');
        const data = await response.json();

        if (response.ok) {
            displayData(data);
        } else {
            console.error(`Error: ${data.error}`);
            displayError(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        displayError('An unexpected error occurred');
    }
}

function displayData(data) {
    console.log('Data from API:', data);
    mostrarDatos(data);
}

function displayError(message) {
    console.error(message);
}
function mostrarMenu() {
    var menu = document.getElementById("menu");
    menu.style.height = "250px";

}

function ocultarMenu() {
    var menu = document.getElementById("menu");
    menu.style.height = "0px";

}



function Equipos(){
    var Equipos = document.getElementById("divEquipos");
    var Jugadores = document.getElementById("divJugadores");

    Equipos.classList.remove("equiposOculto");
    Jugadores.classList.add("jugadoresOculto");
    ocultarMenu();

}

function Jugadores(){
    var Jugadores = document.getElementById("divJugadores");
    var Equipos = document.getElementById("divEquipos");

    Jugadores.classList.remove("jugadoresOculto");
    Equipos.classList.add("equiposOculto");
    ocultarMenu();


}

function mostrarDatos(data) {
    mostrarEquipos(data.equipos);
    mostrarJugadores(data.jugadores, data.equipos);

}


function mostrarEquipos(data){
    var div = document.getElementById("div");
    
    div.classList.add("div1")

    var divEquipos = document.createElement("div");
    divEquipos.id = "divEquipos";
    divEquipos.style.display = "none";


    divEquipos.classList.add("divEquipos");
    for (var i = 0; i < data.length; i++) {
      var divIndividualEquipos = document.createElement("div");
  
      // Team information
      var divEscudo = document.createElement("div");
      var nombreEquipo = document.createElement("h1");
      nombreEquipo.textContent = data[i].NombreEquipo;
      divEscudo.appendChild(nombreEquipo);
      var logoEquipo = document.createElement("img");
      logoEquipo.src = data[i].FotoEscudo;
      divEscudo.appendChild(nombreEquipo);
      divEscudo.appendChild(logoEquipo);
      divEscudo.classList.add("DivEscudo");
  
      var divEstadio = document.createElement("div");
  
      var nombreEstadio = document.createElement("h1");
      nombreEstadio.textContent = data[i].NombreEstadio; // Assuming there's a property called NombreEstadio in your data
  
      var fotoEstadio = document.createElement("img");
      fotoEstadio.src = data[i].FotoEstadio; // Assuming there's a property called FotoEstadio in your data
  
      divEstadio.appendChild(nombreEstadio);
      divEstadio.appendChild(fotoEstadio);
      divEstadio.classList.add("DivEstadio");
  
  
      divIndividualEquipos.appendChild(divEscudo);
      divIndividualEquipos.appendChild(divEstadio);
  
      divIndividualEquipos.classList.add("divIndividualEquipos");
      divEquipos.appendChild(divIndividualEquipos);
      div.appendChild(divEquipos);
    }
}

function mostrarJugadores(data, data2){
    var div = document.getElementById("div");
    var divJugadores = document.createElement("div");
    divJugadores.id = "divJugadores";
    divJugadores.classList.add("divJugadores");
    divJugadores.style.display = "none";

    for (var i = 0; i < data.length; i++) {
      var divindividualJugadores = document.createElement("div");
      
      var divJugador1 = document.createElement("div");
      divJugador1.classList.add("DivJugador1");
      var nombreJugador = document.createElement("h1");
      nombreJugador.textContent = data[i].Nombre + " " + data[i].Apellidos;
      var divFotoJugador = document.createElement("div");
      var fotoJugador = document.createElement("img");
      fotoJugador.src = data[i].Foto;
      divFotoJugador.appendChild(fotoJugador);
      divFotoJugador.classList.add("divFotoJugador");
      var divDatos = document.createElement("div");
      var nombreEquipoJugador = document.createElement("h1");

      for ( equipo = 0 ; equipo < data2.length; equipo++){
        if (data[i].IDEquipo === data2[equipo].ID)
        var nombreEquipo = data2[equipo].NombreEquipo;
      }
      nombreEquipoJugador.textContent = nombreEquipo;
      divDatos.appendChild(nombreEquipoJugador);


      var EdadJugador = document.createElement("h1");
      EdadJugador.textContent = "Edad : " + data[i].Edad;
      divDatos.appendChild(EdadJugador);

      var NumeroJugador = document.createElement("h1");
      NumeroJugador.textContent = "Número : " + data[i].Numero;
      divDatos.appendChild(NumeroJugador);


      divJugador1.appendChild(nombreJugador);
      divJugador1.appendChild(divFotoJugador);
      divJugador1.appendChild(divDatos);


      divindividualJugadores.appendChild(divJugador1);
      divJugadores.appendChild(divindividualJugadores)
      div.appendChild(divJugadores);
      divindividualJugadores.classList.add("divindividualJugadores");
    }
}


function botonEquipos(){
    var divEquipos = document.getElementById("divEquipos")
    var divJugadores = document.getElementById("divJugadores")

    divEquipos.style.display = "flex";
    divJugadores.style.display = "none";

    ocultarMenu();

}

function botonJugadores(){
    var divJugadores = document.getElementById("divJugadores")
    var divEquipos = document.getElementById("divEquipos")

    divJugadores.style.display = "flex";
    divEquipos.style.display = "none";

    ocultarMenu();

}