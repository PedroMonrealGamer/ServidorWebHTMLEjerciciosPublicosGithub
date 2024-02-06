var webs = ['CarruselFotos','ProyectoWebResponsiveMobileFirst(BreakPoint)'];
crearbotones()

function crearbotones() {
    for (var i = 0; i < webs.length; i++) {
        var boton = document.createElement("a");
        boton.id = "boton" + i;
        boton.className = "boton";
        boton.href = webs[i]; 
        boton.innerHTML = webs[i];
        var divbotones = document.getElementById("botones");
        divbotones.appendChild(boton);
    }
}
