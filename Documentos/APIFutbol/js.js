
axios.get('http://192.168.1.152:3000/api/futbol', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);

    mostrarDatos(res.data);
})
.catch(function (err) {
    console.log(err);
});


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
    crearSoloEquipo(data.equipos, data.jugadores);


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
      divIndividualEquipos.id = i;

      divIndividualEquipos.addEventListener("click", function() { /* Al hacer click, ejecutamos la función */
      ClickEquipo(this.id, data);
  });
  
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
      nombreEstadio.textContent = data[i].NombreEstadio;
  
      var fotoEstadio = document.createElement("img");
      fotoEstadio.src = data[i].FotoEstadio;
  
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

function ClickEquipo(id, data) {
    console.log("ID: " + id);
    console.log("Equipo: " + data[id].NombreEquipo);
    var equipoMostrar = document.getElementById("Equipo" + id); // Access element using the id parameter
    equipoMostrar.classList.remove("oculto");

    var EquipoSection = document.getElementById("EquipoSection" + id);
    EquipoSection.scrollIntoView({ behavior: "smooth" });
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

    var datos = document.getElementById("datos");
    datos.scrollIntoView({ behavior: "smooth" });

}

function botonJugadores(){
    var divJugadores = document.getElementById("divJugadores")
    var divEquipos = document.getElementById("divEquipos")

    divJugadores.style.display = "flex";
    divEquipos.style.display = "none";

    ocultarMenu();

    var datos = document.getElementById("datos");
    datos.scrollIntoView({ behavior: "smooth" });

}

function crearSoloEquipo(equipos, jugadores){

    for (i = 0 ; i < equipos.length ; i++){

        console.log(equipos[i].NombreEquipo);
        var Equipo = document.createElement("div");
        Equipo.classList.add("Equipo");
        Equipo.classList.add("oculto");


        Equipo.id = "Equipo" + i;
        console.log(Equipo.id)

        var divEquipo = document.createElement("div");
        divEquipo.classList.add("DivEquipo");
        var section = document.createElement("section");
        section.id = "EquipoSection" + i;
        var divEscudo = document.createElement("div");
        var nombreEquipo = document.createElement("h1");
        nombreEquipo.textContent = equipos[i].NombreEquipo;
        var fotoEscudo = document.createElement("img");
        fotoEscudo.src = equipos[i].FotoEscudo;
        var divJugadores = document.createElement("div");
        divJugadores.classList.add("divJugadoresEquipo");
        divEquipo.appendChild(divEscudo);


    var divEstadioEquipo = document.createElement("div");
    divEstadioEquipo.classList.add("divEstadioEquipo");
    var nombreEstadio = document.createElement("h1");
    nombreEstadio.textContent = equipos[i].NombreEstadio;
    var fotoEstadioEquipo = document.createElement("img");
    fotoEstadioEquipo.src = equipos[i].FotoEstadio;
    var capacidadEstadio = document.createElement("h1");
    capacidadEstadio.textContent = "Capacidad: " + equipos[i].CapacidadEstadio + " personas";

    divEstadioEquipo.appendChild(nombreEstadio);
    divEstadioEquipo.appendChild(capacidadEstadio);

    divEstadioEquipo.appendChild(fotoEstadioEquipo);

    divEquipo.appendChild(divEstadioEquipo);

     for(jugador = 0; jugador < jugadores.length; jugador++){
        
        if(jugadores[jugador].IDEquipo == equipos[i].ID){


             var divJugador = document.createElement("div"); 
             divJugador.classList.add("divJugadorEquipo"); 
             var nombrejugador = document.createElement("h1"); 
             nombrejugador.textContent = jugadores[jugador].Nombre + " " + jugadores[jugador].Apellidos; 

             var fotojugador = document.createElement("img");
             fotojugador.src = jugadores[jugador].Foto;

             var edadJugador = document.createElement("h1");
             edadJugador.textContent = "Edad: " + jugadores[jugador].Edad;

             var numerojugador = document.createElement("h1");
             numerojugador.textContent = "Número: " + jugadores[jugador].Numero;

             var posicionJugador = document.createElement("h1");
             posicionJugador.textContent = "Posición: " + jugadores[jugador].Posicion;

             var nacionalidadJugador = document.createElement("h1");
             nacionalidadJugador.textContent = "Nacionalidad: " + jugadores[jugador].Nacionalidad;
             divJugador.appendChild(nombrejugador);
             divJugador.appendChild(fotojugador);
             divJugador.appendChild(edadJugador);
             divJugador.appendChild(numerojugador);
             divJugador.appendChild(posicionJugador);
             divJugador.appendChild(nacionalidadJugador);



             divJugadores.appendChild(divJugador);

        }


    }  Equipo.appendChild(section);
       divEquipo.appendChild(divJugadores);
        divEscudo.appendChild(nombreEquipo);
        divEscudo.appendChild(fotoEscudo);
        Equipo.appendChild(divEquipo);
        document.body.appendChild(Equipo);


    }
}
