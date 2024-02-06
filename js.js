var url = ['CarruselFotos','ProyectoWebResponsiveMobileFirst(BreakPoint)'];
var web = ['CarruselFotos','ProyectoWebResponsiveMobileFirst(BreakPoint)'];

crearbotones()

function crearbotones() {
    for (var i = 0; i < url.length; i++) {
        var boton = document.createElement("a");
        boton.id = "boton" + i;
        boton.className = "boton";
        boton.href = url[i]; 
        boton.innerHTML = web[i];
        var divbotones = document.getElementById("botones");
        divbotones.appendChild(boton);
    }
}
