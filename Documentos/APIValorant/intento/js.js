var Menu = {
    Opciones: [
        { Nombre: "Agentes", Fotos: [], URL: "Agentes/index.html"},
        { Nombre: "Mapas", Fotos: [], URL: "Mapas"},
        { Nombre: "Armas", Fotos: [], URL: "Armas"},

    ]
}
/* //////////////////////////////////////////////////////////////////// */
axios.get('https://valorant-api.com/v1/agents', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);

    Menu.Opciones[0].Fotos = res.data.data[Math.floor(Math.random() * 10)].displayIcon;
})
.catch(function (err) {
    console.log(err);
});

/* //////////////////////////////////////////////////////////////////// */

axios.get('https://valorant-api.com/v1/maps', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);
    Menu.Opciones[1].Fotos = res.data.data[Math.floor(Math.random() * 5)].listViewIconTall
    ;
})
.catch(function (err) {
    console.log(err);
});

/* //////////////////////////////////////////////////////////////////// */

axios.get('https://valorant-api.com/v1/weapons', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);
    Menu.Opciones[2].Fotos = res.data.data[Math.floor(Math.random() * 10)].displayIcon;
    Mostrar();

})
.catch(function (err) {
    console.log(err);
});







/* //////////////////////////////////////////////////////////////////// */

function Mostrar(res){

    for(i = 0; i < Menu.Opciones.length; i++){
/*         console.log(Menu.Opciones[i].Fotos);
       var div = document.getElementById("div");
       var foto = document.createElement("img");
       foto.src = Menu.Opciones[i].Fotos;
       div.appendChild(foto); */





       var divelemento = document.createElement("div");
       var titluloelemento = document.createElement("h1");
       titluloelemento.textContent = Menu.Opciones[i].Nombre;
       var divfotoelemento = document.createElement("div");
       var fotoelemento = document.createElement("img");
       fotoelemento.src = Menu.Opciones[i].Fotos;
        divelemento.id = i;

        divfotoelemento.appendChild(fotoelemento);
       divelemento.appendChild(titluloelemento);
       divelemento.classList.add("divelemento");
       divelemento.style.backgroundImage = `url("${Menu.Opciones[i].Fotos}")`;
       divelemento.addEventListener("click", function() {
        irA(Menu.Opciones[this.id].URL);
    });

       div.appendChild(divelemento);
       div.classList.add("div")
       if (i == 2) {
    divelemento.classList.add("armas");
    }


    
    }
}



function irA(URL){
    console.log(URL);
    window.location.href = URL;

}