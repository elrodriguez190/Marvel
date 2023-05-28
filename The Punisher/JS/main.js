function showdate(){
    document.getElementById("dateshow").innerHTML= Date();
}
document.getElementById("The Punisher").innerHTML="The punisher"

function mostrarBiografia() {
  var biografia = document.getElementById("biografia");
  if (biografia.style.display === "none") {
    biografia.style.display = "block";
  } else {
    biografia.style.display = "none";
  }
}
window.addEventListener('DOMContentLoaded', function() {
    var biografia = document.getElementById("biografia");
    biografia.style.display = "none";
  })
