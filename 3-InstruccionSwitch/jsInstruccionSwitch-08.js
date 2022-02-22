function mostrar()
{
let destino;

destino = document.getElementById("txtIdDestino").value;

switch (destino) {
	
	case "Bariloche":
	case "Ushuaia":
		alert("Hace frio.");
		break;

	case "Cataratas":
	case "Mar del Plata":
		alert("Hace calor.");
		break;
   }
}//FIN DE LA FUNCIÓN