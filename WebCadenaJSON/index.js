var datos = {
  "carCollection": "Enthusiastas de Autos Últimos",
  "location": "Ciudad Veloz",
  "founded": 2018,
  "headquarters": "Plaza Velocidad",
  "active": true,
  "cars": [
      {
          "brand": "Ferrari",
          "model": "488 GTB",
          "year": 2022,
          "color": "Rojo",
          "fuelType": "Gasolina",
          "transmission": "Automática",
          "horsepower": 670
      },
      {
          "brand": "Tesla",
          "model": "Model S Plaid",
          "year": 2023,
          "color": "Azul",
          "fuelType": "Eléctrico",
          "transmission": "Dual Motor",
          "horsepower": 1020
      },
      {
          "brand": "Toyota",
          "model": "Prius",
          "year": 2021,
          "color": "Verde",
          "fuelType": "Híbrido",
          "transmission": "CVT",
          "horsepower": 121
      },
      {
          "brand": "Tesla",
          "model": "Cybertruck",
          "year": 2024,
          "color": "Plata",
          "fuelType": "Eléctrico",
          "transmission": "Automática",
          "horsepower": 800
      },
      {
          "brand": "Lamborghini",
          "model": "Aventador SVJ",
          "year": 2025,
           "color": "Negro",
          "fuelType": "Gasolina Premium",
          "transmission": "Automática",
          "horsepower": 770
      },
      {
          "brand": "Porsche",
          "model": "911 GT3",
          "year": 2023,
          "color": "Amarillo",
          "fuelType": "Gasolina",
          "transmission": "Manual",
          "horsepower": 502
      },
      {
          "brand": "Tesla",
          "model": "Roadster",
          "year": 2024,
          "color": "Blanco",
          "fuelType": "Eléctrico",
          "transmission": "Automática",
          "horsepower": 1100
      },
      {
          "brand": "Dodge",
          "model": "Challenger SRT Hellcat",
          "year": 2022,
          "color": "Naranja",
          "fuelType": "Gasolina",
          "transmission": "Automática",
          "horsepower": 717
      },
      {
          "brand": "Honda",
          "model": "Clarity",
          "year": 2023,
          "color": "Morado",
          "fuelType": "Híbrido",
          "transmission": "CVT",
          "horsepower": 212
      },
      {
          "brand": "Rivian",
          "model": "R1T",
          "year": 2024,
          "color": "Plata",
          "fuelType": "Eléctrico",
          "transmission": "Automática",
          "horsepower": 750
      }
  ]
}



document.addEventListener("DOMContentLoaded", function () {
  // Llama a la función al cargar la página, así se muestran los datos
  muestradatos();
});

function muestradatos() {
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("año").value = "";
  document.getElementById("color").value = "";
  document.getElementById("combustible").value = "";
  document.getElementById("transmision").value = "";
  document.getElementById("caballos").value = "";
  
  var divprincipal = document.getElementById("div1");

  // Antes de mostrar los datos, limpia para que no se dupliquen
  divprincipal.innerHTML = "";

  datos.cars.forEach(car => {
    var div = document.createElement("div");
    div.classList.add("divnuevo");

    div.innerHTML = `
      <p>Marca: ${car.brand}</p>
      <p>Modelo: ${car.model}</p>
      <p>Año: ${car.year}</p>
      <p>Color: ${car.color}</p>
      <p>Combustible: ${car.fuelType}</p>
      <p>Transmisión: ${car.transmission}</p>
      <p>Caballos de potencia: ${car.horsepower}</p>
    `;

    divprincipal.appendChild(div);
  });
}

function añadircoche() {
  // Coje los datos de los campos de texto
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  var año = document.getElementById("año").value;  // Corregido aquí
  var color = document.getElementById("color").value;
  var combustible = document.getElementById("combustible").value;
  var transmision = document.getElementById("transmision").value;
  var caballos = document.getElementById("caballos").value;

  var nuevoCoche = {
    "brand": marca,
    "model": modelo,
    "year": año,
    "color": color,
    "fuelType": combustible,
    "transmission": transmision,
    "horsepower": caballos
  };

  datos.cars.push(nuevoCoche);

  // Limpiar los campos después de agregar el coche
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("año").value = "";
  document.getElementById("color").value = "";
  document.getElementById("combustible").value = "";
  document.getElementById("transmision").value = "";
  document.getElementById("caballos").value = "";

  // Volver a mostrar los datos actualizados
  muestradatos();
}

function eliminarcoche() {
  var marcaEliminar = document.getElementById("marca").value;
  var modeloEliminar = document.getElementById("modelo").value;

  if (!marcaEliminar || !modeloEliminar) {
    alert("Datos no correctos");
    return;
  }

  datos.cars = datos.cars.filter(car => !(car.brand === marcaEliminar && car.model === modeloEliminar));

  // Limpiar los campos después de eliminar el coche
  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";

  // Volver a mostrar los datos actualizados
  muestradatos();
}
