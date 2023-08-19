let clima = prompt("¿Cómo está el día de hoy? (soleado, nublado, lloviendo)");

let mensaje = "El día de hoy está ";
if (clima === "soleado") {
    mensaje += "soleado.";
} else if (clima === "nublado") {
    mensaje += "nublado.";
} else if (clima === "lloviendo") {
    mensaje += "lloviendo.";
} else {
    mensaje = "No se reconoce el estado del clima ingresado.";
}
alert(mensaje);