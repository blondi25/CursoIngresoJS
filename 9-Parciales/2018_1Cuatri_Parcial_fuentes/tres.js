function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio =prompt("Ingrese precio");
	descuento =prompt("Ingrese porcentaje de descuento");

    precioFinal = precio * (descuento / 100)


    document.getElementById("elPrecioFinal").value = precioFinal;

}
