function mostrar()
{

let precio;
let descuento;
let precioFinal;

precio =prompt("Ingrese el precio del producto");
precio = parseFloat(precio);
descuento =prompt("Ingrese el porcentaje de descuento del producto");
descuento = parseFloat(descuento);

precioFinal = precio - precio * descuento / 100;

document.getElementById("elPrecioFinal").value = precioFinal;

}
