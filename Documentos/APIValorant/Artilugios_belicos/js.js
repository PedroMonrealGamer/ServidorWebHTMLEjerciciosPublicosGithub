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

    var botonSkins = document.createElement("button");
    botonSkins.textContent = "Skins";
    botonDetalles.classList.add("botonesArma");
    botonSkins.classList.add("botonesArma");



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
}