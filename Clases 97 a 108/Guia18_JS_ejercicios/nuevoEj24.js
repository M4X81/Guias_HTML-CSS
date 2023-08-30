/*Este código crea un canvas con un ID de "myCanvas" dentro del formulario, 
y luego utiliza la función "getContext" de JavaScript para obtener el contexto
 de dibujo en 2D del canvas. A continuación, se utiliza la función "beginPath"
  para comenzar un nuevo camino de dibujo, y la función "arc" para dibujar un 
  círculo con un centro en (250,250), un radio r (random) y un ángulo de inicio y 
  finalización de 0 a 2 veces Math.PI (lo que equivale a un círculo completo). 
  Finalmente, se utiliza la función "stroke" para dibujar el círculo en el canvas. */

  var canvas = document.getElementById("myCanvas");
  canvas.style.background = "yellow";
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  var r = (Math.random()*250).toFixed(2);
  ctx.arc(250, 250, r, 0, 2 * Math.PI);
  ctx.stroke();
  var texto = "El radio del círculo es: " + r + " px (aprox. "+ (r/37.8).toFixed(2) + " cms.)";
  document.getElementById("miParrafo").innerHTML = texto;