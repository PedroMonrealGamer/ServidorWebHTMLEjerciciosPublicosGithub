var url = ['CarruselFotos', 'ProyectoWebResponsiveMobileFirst(BreakPoint)', 'WebCadenaJSON'];
var web = ['Carrusel Fotos', 'Proyecto WebResponsive Mobile First (BreakPoint)', 'Web con cadena JSON'];

crearBotones();

function crearBotones() {
    var divBotones = document.getElementById("botones");
    for (var i = 0; i < url.length; i++) {
        var boton = document.createElement("a");
        boton.id = "boton" + i;
        boton.className = "boton";
        boton.href = url[i];
        boton.innerHTML = web[i];
        divBotones.appendChild(boton);
    }
}
