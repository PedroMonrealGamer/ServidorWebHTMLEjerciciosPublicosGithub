var url = ['/Documentos/CarruselFotos', '/Documentos/ProyectoWebResponsiveMobileFirst(BreakPoint)', '/Documentos/WebCadenaJSON'];
var web = ['Carrusel Fotos', 'Proyecto WebResponsive Mobile First (BreakPoint)', 'Web con cadena JSON'];
var fotoscarrusel = ['/Documentos/INDEX/fotos/1.png', '/Documentos/INDEX/fotos/2.png','/Documentos/INDEX/fotos/3.png'];
var fotoactual = 0;
crearBotones();
crearcarrusel();
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
function crearcarrusel() {
    for (var i = 0; i < fotoscarrusel.length; i++) {
        var enlace = document.createElement("a");
        enlace.href = url[i];
        var foto = document.createElement("img");
        foto.src = fotoscarrusel[i];
        foto.id = "foto" + i;
        foto.classList.add("oculto");
        enlace.appendChild(foto);
        var divcarrusel = document.getElementById("contenedorcarrusel");
        divcarrusel.appendChild(enlace);
        var descripcion = document.getElementById("descripcion").textContent =web[fotoactual]

    }
    var fotoprimera = document.getElementById("foto0");
    fotoprimera.classList.remove("oculto");
}

function pasarfotos() {
    var fotoocultar = document.getElementById("foto" + fotoactual);
    fotoocultar.classList.add("oculto");
    fotoactual++;
    if (fotoactual === fotoscarrusel.length) {
        fotoactual = 0;
    }
    var fotoactualmostrar = document.getElementById("foto" + fotoactual);
    fotoactualmostrar.classList.remove("oculto");
    var descripcion = document.getElementById("descripcion").textContent =web[fotoactual]
}
//Cambiar las fotos automáticamente
  setInterval(function() {
    pasarfotos();}, 3000); 