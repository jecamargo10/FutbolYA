//Tomado de StackOverFlow
//Podrias realizar esto en el metodo de render, el mismo comportamiento, es raro ver este js por fuera.
document.onreadystatechange = function () {
  var state = document.readyState;
  if(state === 'complete') {
    document.getElementById('interactive');
    document.getElementsByClassName('loading')[0].style.display="none";
    document.getElementsByClassName('todo')[0].style.display="block";
  }
}//

function mostrarReserva()
{
	document.getElementsByClassName('reservaOc')[0].style.display='block';
}
