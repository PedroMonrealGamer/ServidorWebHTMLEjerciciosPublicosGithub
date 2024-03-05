var Categorias = {
    Opciones: [
        { Categoria: "EEquippableCategory::Heavy", Nombre: "Heavy"},
        { Categoria: "EEquippableCategory::Rifle", Nombre: "Rifle"},
        { Categoria: "EEquippableCategory::Shotgun", Nombre: "Shotgun"},
        { Categoria: "EEquippableCategory::Sidearm", Nombre: "Sidearm"},
        { Categoria: "EEquippableCategory::Sniper", Nombre: "Sniper"},
        { Categoria: "EEquippableCategory::SMG", Nombre: "SMG"},



    ]
}

axios.get('https://valorant-api.com/v1/weapons', {
    responseType: 'json',
})
.then(function (res) {
    CrearCategorias(res);
    console.log(res);

})
.catch(function (err) {
    console.log(err);
});

/* //////////////////////////////////////////////////////////////////// */

function CrearCategorias(res) {
    var divGrupo = document.createElement("div");
    divGrupo.id = "divGrupo";

    // Crear categorías
    for (var i = 0; i < Categorias.Opciones.length; i++) {
        var divCategoria = document.createElement("div");

        var nombreCategoria = document.createElement("h1");
        nombreCategoria.textContent = Categorias.Opciones[i].Nombre;
             

        nombreCategoria.classList.add("nombreCategoria");
        divCategoria.classList.add("divcategoria");
        divCategoria.appendChild(nombreCategoria);
        var divcajacateogoria = document.createElement("div");
        divCategoria.appendChild(divcajacateogoria);
        divcajacateogoria.classList.add("divcajacateogoria");

        divcajacateogoria.id = Categorias.Opciones[i].Categoria;

        divGrupo.appendChild(divCategoria);
    }

    document.body.appendChild(divGrupo);
    clasificar(res);
}

function clasificar(res) {

    // Clasificar elementos en categorías
    for (var i = 0; i < res.data.data.length; i++) {
        for (var categoria = 0; categoria < Categorias.Opciones.length; categoria++) {
            if (res.data.data[i].category === Categorias.Opciones[categoria].Categoria) {
                crearArmas(res, i, categoria);
            }
        }
    }
}

function crearArmas(res, i, categoria) {

    var divcajacateogoria = document.getElementById(res.data.data[i].category);

    var divArma = document.createElement("div");
    divArma.classList.add("divArma");

    var divPrincipal = document.createElement("div");
    var nombreArma = document.createElement("h2");
    nombreArma.textContent = res.data.data[i].displayName;
    nombreArma.classList.add("nombreArma");
    var divfotoarma = document.createElement("div");
    divfotoarma.classList.add("divfotoarma");
    var fotoArma = document.createElement("img");
    fotoArma.src = res.data.data[i].displayIcon;
    fotoArma.classList.add("fotoArma");
    divfotoarma.appendChild(fotoArma);
    var datosArma = document.createElement("div");
    var precioArma = document.createElement("h1");
    precioArma.textContent =("▢" + res.data.data[i].shopData.cost);
    precioArma.classList.add("precioArma")
    datosArma.classList.add("datosArma")

    var botonesArmaDIV = document.createElement("div");
    var botonDetalles = document.createElement("button");
        botonDetalles.textContent = "Detalles";
        botonDetalles.id =  "Detalles" + i;
        botonDetalles.addEventListener("click", function() {
            detalles(this.id);
        });

    var botonSkins = document.createElement("button");
    botonSkins.textContent = "Skins";
    botonDetalles.classList.add("botonesArma");
    botonSkins.classList.add("botonesArma");
    botonSkins.id = "Skins" + i;
    botonSkins.addEventListener("click", function() {
        
        skins(this.id);
    });

    




    botonesArmaDIV.classList.add("botonesArmaDIV");
    botonesArmaDIV.appendChild(botonDetalles);
    botonesArmaDIV.appendChild(botonSkins);


    datosArma.appendChild(precioArma);

    divcajacateogoria.appendChild(divArma);


    divArma.appendChild(divPrincipal);
    divPrincipal.appendChild(nombreArma);
    divPrincipal.appendChild(divfotoarma);
    divPrincipal.appendChild(datosArma);
    divPrincipal.appendChild(botonesArmaDIV);

    crearDetalles(res, i, categoria);

}

function crearDetalles(res, i, categoria){

    var div = document.getElementById("div");
    var divDetalles = document.createElement("div");
    divDetalles.id = "divDetalles" + i;
    divDetalles.classList.add("divDetalles");
    
    var cruz = document.createElement("i")
    cruz.classList.add("fa-xmark");
    cruz.classList.add("fa-solid");
    cruz.classList.add("cruz");
    cruz.id = "cruzDetalles" + i;

    cruz.addEventListener("click", function() {
        ocultarDetalles(this.id)});


    var titulo = document.createElement("h1");
    var datos = document.createElement("div")
    titulo.textContent = res.data.data[i].displayName;
    var foto = document.createElement("img");
    foto.src = res.data.data[i].displayIcon;
    
    var precio = document.createElement("h1");
    precio.textContent = ("Coste: ▢" + res.data.data[i].shopData.cost);
    var categoria = document.createElement("h1");
    var nombrecat = res.data.data[i].category.replace("EEquippableCategory::", "");
    categoria.textContent = ("Categoria: " + nombrecat);
    var velocidadrecarga = document.createElement("h1");
    velocidadrecarga.textContent = ("Tiempo recarga: " + res.data.data[i].weaponStats.reloadTimeSeconds);

    divDetalles.appendChild(cruz);
    divDetalles.appendChild(titulo);
    divDetalles.appendChild(foto);
    divDetalles.appendChild(datos);
    divDetalles.appendChild(velocidadrecarga);

    datos.appendChild(precio);
    datos.appendChild(categoria);







    div.appendChild(divDetalles);
    divDetalles.classList.add("oculto");
}





function detalles(id){
    var idsolo = id.replace("Detalles", "");

    var divDetallesmostrar = document.getElementById("divDetalles" + idsolo);
    divDetallesmostrar.classList.remove("oculto");
    divDetallesmostrar.classList.remove("oculto");
    var divGrupo = document.getElementById("divGrupo");
    divGrupo.style.opacity = "0%";



}

function skins(id){
    console.log("skins" + id)
}



function ocultarDetalles(id){
    var idnueva = id.replace("cruzDetalles", "");
    console.log(idnueva);
    var divDetalles = document.getElementById("divDetalles" + idnueva);
    divDetalles.classList.add("oculto");
    var divGrupo = document.getElementById("divGrupo");
    divGrupo.style.opacity = "100%";
}