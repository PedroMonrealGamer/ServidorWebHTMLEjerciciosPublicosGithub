var bot = document.getElementsByClassName("fa-solid");
var fotos = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg'];
var descripcion = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg'];
var posicion = 0; //Asignamos el valor 0 para que al principio aparezca la primera foto.
var numero_mostrar = 1; //Este es el valor inicial del contador.

document.getElementById('imagen').src = fotos[posicion];
modificarnumero(); //Asignar inicialmente el valor del número
crearbotones();
modificarbotones(0);
mostrarfoto();

/*  setInterval(function() {
    cambiarfoto(1);
}, 1000);  */

//Creamos los botones que luego actuarán
function crearbotones() {
    for (var i = 0; i < fotos.length; i++) {
        var boton = document.createElement("i");
        boton.className = "fa-solid fa-circle boton";
        boton.id = "boton" + i;
        var puntosContainer = document.getElementsByClassName("puntos")[0];
        puntosContainer.appendChild(boton);

        //Creamos un manejador de eventos para los circulos, al hacer click llama la función funcionboton
        boton.addEventListener("click", funcionboton);
    }
}

//Funcion que muestra la foto que le llega como variable, además de cambiar el color del botón
function mostrarfoto() {
    document.getElementById('imagen').src = fotos[posicion];
    document.getElementById('descripcion').textContent = descripcion[posicion];

    modificarbotones(posicion);
}

//Según el botón de flecha, cambia el valor de posición, teniendo en cuenta la primera y última foto.
function cambiarfoto(flecha) {
    if (flecha === -1) {
        posicion = (posicion === 0) ? fotos.length - 1 : posicion - 1;
    } else if (flecha === 1) {
        posicion = (posicion === fotos.length - 1) ? 0 : posicion + 1;
    }
    numero_mostrar = posicion + 1;
    modificarnumero();
    mostrarfoto(posicion);
}

//Funcióm encargada de modificar el número que aparece
function modificarnumero(){
    document.getElementById('numero').textContent = (numero_mostrar + "/" + fotos.length);}

//Funcion para cambiar los colores de los circulos
function modificarbotones(pos) {
    for (var n = 0; n < fotos.length; n++) {
        var botonmodificar = document.getElementById("boton" + n);

        if (pos !== n) {
            botonmodificar.classList.remove("botoncolor");
        } else {
            botonmodificar.classList.add("botoncolor");
        }
    }
}
//Según el círculo pulsado, se muestra la imagen
function funcionboton(event) {
    var elementoId = event.target.id;
    var posicionmodify = elementoId.substring('boton'.length); //Le quita a la variable la palabra boton para así poder emplearlo como número de foto
    posicion = Number(posicionmodify);
    console.log(elementoId)
    mostrarfoto();}
