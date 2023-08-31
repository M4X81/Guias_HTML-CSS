const areaSwitch = document.getElementById("areaSwitch");
const perimetroSwitch = document.getElementById("perimetroSwitch");
const diametroSwitch = document.getElementById("diametroSwitch");
const inputValue = document.getElementById("inputValue");
const boton = document.getElementById("btn");
const parrafo1 = document.getElementById("p1")
var bool1 = false;
var bool2 = false;
var bool3 = false;

areaSwitch.addEventListener("change", function () {
  if (areaSwitch.checked) {
    perimetroSwitch.checked = false;
    diametroSwitch.checked = false;
    bool3 = true;
  }
});

perimetroSwitch.addEventListener("change", function () {
  if (perimetroSwitch.checked) {
    areaSwitch.checked = false;
    diametroSwitch.checked = false;
    bool2 = true;
  }
});

diametroSwitch.addEventListener("change", function () {
  if (diametroSwitch.checked) {
    areaSwitch.checked = false;
    perimetroSwitch.checked = false;
    bool1 = true;
  }
});

var r;
function calcular() {
  r = 0;
  var valor = inputValue.value;

  if (bool3) {
    r = Math.sqrt(valor / Math.PI);
    bool3=false;
  } else if (bool2) {
    r = valor / (2 * Math.PI);
    bool2=false;
  } else {
    r = valor / 2;
    bool1=false;
  }

  parrafo1.innerHTML = "El radio es " + r.toFixed(2);
}

boton.onclick = calcular;
inputValue.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      boton.click();
  }
});
