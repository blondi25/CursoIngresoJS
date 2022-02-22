function mostrar()
{
let continente;
let dias;
let precioFinal;
let pago;

continente = document.getElementById("Marca").value;
dias =prompt("Ingrese la cantidad de dias que desea viajar.");
dias = parseInt(dias);
pago =prompt("Indique medio de pago");
precioFinal = dias * 100;

switch (continente) {
    case "America":
        if (pago == "debito") {
            alert("Precio Final: " + precioFinal - precioFinal * 0.6);
        }
        else {
            alert("Precio Final: " + precioFinal - precioFinal * 0.5);
        }
        break;

    case "Africa":
        if (pago == "efectivo" || pago == "mercado pago") {
            alert("Precio Final: " + precioFinal - precioFinal * 0.75);
        }
        else {
            alert("Precio Final: " + precioFinal - precioFinal * 0.6);
        }
        break;
    
    case "Europa":
        if (pago == "debito") {
            alert("Precio Final: " + precioFinal - precioFinal * 0.35);
        }
        else if (pago == "mercado pago") {
            alert("Precio Final: " + precioFinal - precioFinal * 0.3);
        }
        else {
            alert("Precio Final: " + precioFinal - precioFinal * 0.25);
        }
        break;
    
    default:
        alert("Precio Final: " + precioFinal + precioFinal * 0.2);
        break;
    }
}
