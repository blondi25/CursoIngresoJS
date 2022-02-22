function mostrar()
{
let destino;
let estacion;
const precio = 15000;
let precioFinal;
let descuento = 0;
let aumento = 0;

destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;

switch (estacion) {
	case "Invierno":
		if (destino == "Bariloche") {
			aumento = 20;
		} 
		else if (destino == "Mar del plata") {
			descuento = 20;
		} 
		else {
			descuento = 10;
		}
		break;

	case "Verano":
		if (destino == "Bariloche") {
			descuento = 20;
		} 
		else if (destino == "Mar del plata") {
			aumento = 20;
		} 
		else {
			aumento = 10;
		}
		break;
	case "Primavera":
	case "Otoño":
		if (destino == "Cordoba") {
			precio = precioFinal;
		}
		else {
			aumento = 10;
		}
		break;
}

if (aumento != 0) {
	precioFinal = precio + precio * aumento / 100;
}
else if (descuento != 0) {
	precioFinal = precio - precio * descuento / 100;
}
else {
	precioFinal = precio;
}
}
