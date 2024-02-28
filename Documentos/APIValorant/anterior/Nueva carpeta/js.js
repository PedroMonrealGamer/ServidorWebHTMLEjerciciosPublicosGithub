
axios.get('https://valorant-api.com/v1/agents', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);

    personajeprincipal(res.data);
})
.catch(function (err) {
    console.log(err);
});

function personajeprincipal(data) {
    var div = document.getElementById("div");

    for (var i = 0; i < 22; i++) {
        if (data.data[i].bustPortrait !== null) {
            var divpersonaje = document.createElement("div");
            divpersonaje.id = i;
            divpersonaje.addEventListener("click", function() {
                divpersonajecambio(this.id);
            });

            divpersonaje.classList.add("divpersonaje");
            var divpersonajeprincipal = document.createElement("div");
            divpersonajeprincipal.classList.add("divpersonajeprincipal");

            var nombrepersonaje = document.createElement("h1");
            nombrepersonaje.classList.add("nombrepersonaje");
            nombrepersonaje.textContent = data.data[i].displayName;

            var imgpersonaje = document.createElement("img");
            imgpersonaje.src = data.data[i].displayIcon;

            var divfoto = document.createElement("div");
            divfoto.classList.add("divfoto");
            divfoto.classList.add("divfotoprincipal");
            divfoto.appendChild(imgpersonaje);
            divfoto.style.backgroundImage = `url("${data.data[i].background}")`;


            divpersonajeprincipal.appendChild(nombrepersonaje);
            divpersonajeprincipal.appendChild(divfoto)
            divpersonajeprincipal.id = "divpersonajeprincipal" + i;
            console.log(divpersonajeprincipal.id);


            var divboton = document.createElement("div");
            divboton.classList.add("divboton");


            divpersonajeprincipal.style.height = "100%";
            divpersonajeprincipal.classList.add("divpersonajemovil");


/* CONTENIDO DIV SECUNDARIO  ******************************************* */
            var divpersonajesecundario = document.createElement("div");
            var divgeneralhabilidades = document.createElement("div");
            divgeneralhabilidades.classList.add("divgeneralhabilidades")

            for (var hab = 0; hab < 4; hab++){
                var divhab = document.createElement("div");
                divhab.classList.add("divhab");
                divgeneralhabilidades.appendChild(divhab)

                var nombrehab = document.createElement("h1");
                nombrehab.classList.add("nombrehab");
                nombrehab.textContent = data.data[i].abilities[hab].displayName;
                var logohab = document.createElement("img");
                logohab.classList.add("logohab");
                logohab.src = data.data[i].abilities[hab].displayIcon;
                divhab.appendChild(nombrehab);
                divhab.appendChild(logohab);
                nombrehab.classList.add("habilidadpersonaje");

            }
            divpersonajesecundario.appendChild(divgeneralhabilidades);
            divpersonajesecundario.classList.add("divpersonajesecundario");



            var divfotosecundario = document.createElement("div");
            divpersonajesecundario.appendChild(divfotosecundario);




            var imgpersonajesecundario = document.createElement("img");
            imgpersonajesecundario.src = data.data[i].bustPortrait;
            divfotosecundario.appendChild(imgpersonajesecundario);
            divfotosecundario.classList.add("divfotosecundario");
            divfotosecundario.classList.add("divfoto");
            imgpersonajesecundario.classList.add("imgpersonajesecundario");
            divpersonajesecundario.classList.add("divpersonajemovil");


            divpersonajesecundario.id = "divpersonajesecundario" + i;
            console.log(divpersonajesecundario.id);

            divpersonajesecundario.style.height = "0%";
            
            divfotosecundario.addEventListener("click", divpersonajecambio);

            divpersonaje.appendChild(divpersonajeprincipal);
            divpersonaje.appendChild(divpersonajesecundario);

            
            div.appendChild(divpersonaje);
        }
    }
}


function divpersonajecambio(id) {
    console.log(id);
    var iddiv1 = "divpersonajeprincipal" + id;
    var divpersonajeprincipal = document.getElementById(iddiv1);
    divpersonajeprincipal.style.height = "0%";

    var iddiv2 = "divpersonajesecundario" + id;
    var divpersonajesecundario = document.getElementById(iddiv2);
    divpersonajesecundario.style.height = "100%";

    setTimeout(function() {
        var iddiv1 = "divpersonajeprincipal" + id;
        var divpersonajeprincipal = document.getElementById(iddiv1);
        divpersonajeprincipal.style.height = "100%";
    
        var iddiv2 = "divpersonajesecundario" + id;
        var divpersonajesecundario = document.getElementById(iddiv2);
        divpersonajesecundario.style.height = "0%";
    }, 5000);
}

