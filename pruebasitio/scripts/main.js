let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Cristiano_Ronaldo_2018.jpg') {
      miImage.setAttribute('src','images/cristiano-ronaldo-of-portugal.jpg');
    } else {
      miImage.setAttribute('src', 'images/Cristiano_Ronaldo_2018.jpg');
    } 
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Cristiano es el mejor del mundo, ' + miNombre;
    }
  }
  
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Cristiano es el mejor del mundo,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}


