
axios.get('https://valorant-api.com/v1/maps', {
    responseType: 'json',
})
.then(function (res) {
    console.log(res);

    mapas(res.data);
})
.catch(function (err) {
    console.log(err);
});

function mapas(data) {
    var div = document.getElementById("div");

    for (var i = 0; i <data.data.length ; i++) { /* Se ejecuta para cada agente */
    if (data.data[i].listViewIconTall !== null && data.data[i].displayIcon !== null) {
     /* Puede que haya agentes duplicados sin foto, aquí se evita */
            var divmapa = document.createElement("div");
            divmapa.classList.add("divmapa");
            divmapa.id = i;

            divmapa.addEventListener("click", function() { /* Al hacer click, ejecutamos la función */
                divmapacambio(this.id);
            });

            var divmapaprincipal = document.createElement("div");
            divmapaprincipal.classList.add("divmapaprincipal");

            var nombremapa = document.createElement("h1");
            nombremapa.classList.add("nombremapa");
            nombremapa.textContent = data.data[i].displayName;

            var imgmapa = document.createElement("img");
            imgmapa.src = data.data[i].splash;
            imgmapa.id = "imgmapa" + i;
            var divfoto = document.createElement("div");
            divfoto.classList.add("divfoto");
            divfoto.classList.add("divfotoprincipal");
            divfoto.appendChild(imgmapa);



            var descripcionmapa = document.createElement("h2");
            descripcionmapa.id = "descripcionmapa" + i;
            descripcionmapa.classList.add("descripcionmapa");
            descripcionmapa.textContent = data.data[i].narrativeDescription;




            divmapaprincipal.appendChild(nombremapa);
            divmapaprincipal.appendChild(descripcionmapa);
            divmapaprincipal.appendChild(divfoto)
            divmapaprincipal.id = "divmapaprincipal" + i;

            var divboton = document.createElement("div");
            divboton.classList.add("divboton");


            divmapaprincipal.style.height = "100%";
            divmapaprincipal.classList.add("divmapamovil");


/* CONTENIDO DIV SECUNDARIO  ******************************************* */
            var divmapasecundario = document.createElement("div");
            var divgeneralhabilidades = document.createElement("div");
            divgeneralhabilidades.classList.add("divgeneralhabilidades")

            for (var hab = 0; hab < 4; hab++){
                var divhab = document.createElement("div");
            }
            divmapasecundario.appendChild(divgeneralhabilidades);
            divmapasecundario.classList.add("divmapasecundario");
            
            var divfotosecundario = document.createElement("div");
            divmapasecundario.appendChild(divfotosecundario);
            var imgmapasecundario = document.createElement("img");
            imgmapasecundario.src = data.data[i].displayIcon;
            divfotosecundario.appendChild(imgmapasecundario);
            divfotosecundario.classList.add("divfotosecundario");
            divfotosecundario.classList.add("divfoto");
            imgmapasecundario.classList.add("imgmapasecundario");
            divmapasecundario.classList.add("divmapamovil");


            divmapasecundario.id = "divmapasecundario" + i;

            divmapasecundario.style.height = "0%";
            
            divfotosecundario.addEventListener("click", divmapacambio);

            divmapa.appendChild(divmapaprincipal);
            divmapa.appendChild(divmapasecundario);

            div.appendChild(divmapa);
        }
    }
}

function divmapacambio(id) {
    var iddiv1 = "divmapaprincipal" + id;
    var divmapaprincipal = document.getElementById(iddiv1);
    divmapaprincipal.style.height = "0%";

    var iddiv2 = "divmapasecundario" + id;
    var divmapasecundario = document.getElementById(iddiv2);
    divmapasecundario.style.height = "100%";

    setTimeout(function() {
        var iddiv1 = "divmapaprincipal" + id;
        var divmapaprincipal = document.getElementById(iddiv1);
        divmapaprincipal.style.height = "100%";
        var iddiv2 = "divmapasecundario" + id;
        var divmapasecundario = document.getElementById(iddiv2);
        divmapasecundario.style.height = "0%";

        setTimeout(function() {
            var iddiv1 = "divmapaprincipal" + id;
            var nombremapa = "nombremapa" + id;

            var divmapaprincipal = document.getElementById(iddiv1);
            var nombremapa = document.getElementById(nombremapa);

            var descripcionmapa = document.getElementById("descripcionmapa" + id);
            var imgmapa = document.getElementById("imgmapa" + id);
            divmapaprincipal.classList.add("blur");
            imgmapa.style.filter = "blur(5px)";
            imgmapa.style.filter = "grayscale(100%)";

            descripcionmapa.style.opacity = "90%";
        }, 1000);


        setTimeout(function() {
            var iddiv1 = "divmapaprincipal" + id;
            var nombremapa = "nombremapa" + id;

            var divmapaprincipal = document.getElementById(iddiv1);
            var nombremapa = document.getElementById(nombremapa);

            var descripcionmapa = document.getElementById("descripcionmapa" + id);
            var imgmapa = document.getElementById("imgmapa" + id);
            divmapaprincipal.classList.remove("blur");
            imgmapa.style.filter = "";
            descripcionmapa.style.opacity = "";
            imgmapa.style.filter = "";

        }, 10000);


    }, 5000);

}

