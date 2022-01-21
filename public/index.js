var estudiantes = [
  {
    apellidop: "Portilla",
    apellidom: "Salazar",
    nombre: "Francisco Emanuel",
    edad: 26,
    fechanacimiento: {
      año: 1995,
      mes: "noviembre",
      dia: 16
    },
    carrera: "IRYC"
  },
  {
    apellidop: "Cuellar",
    apellidom: "Garces",
    nombre: "Francisco",
    edad: 22,
    fechanacimiento: {
      año: 1999,
      mes: "Septiembre",
      dia: 15
    },
    carrera: "IRYC"
  }
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < estudiantes.length; i++) {
  var templ = document.getElementById('tbodyestudiantes').content.cloneNode(true);
  var celnumero = templ.querySelector("span[name='tbodynumero']");
  var celnombre = templ.querySelector("span[name='tbodynombre']");
  var celedad = templ.querySelector("span[name='tbodyedad']");
  var celcarrera = templ.querySelector("span[name='tbodycarrera']");

  celnumero.innerText = i + 1
  celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
  celedad.innerText = estudiantes[i].edad;
  celcarrera.innerText = estudiantes[i].carrera

  table.append(templ);
}
