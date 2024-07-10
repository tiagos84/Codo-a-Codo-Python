// Obtiene el pop-up

function abrirPopup(clase) {
  console.log(clase)
  var popup = document.getElementById('popUp-' + clase);
  if (popup) {
    popup.style.display = 'block';
  }
}

// Función para cerrar el popup
function cerrarPopup(clase) {
  var popup = document.getElementById('popUp-' + clase);
  if (popup) {
    popup.style.display = 'none';
  }
}