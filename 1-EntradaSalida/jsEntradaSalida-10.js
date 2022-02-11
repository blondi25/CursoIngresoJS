/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe
	let descuento25
    let resultado
	
	importe = document.getElementById("txtIdImporte").value 
	importe = parseInt(importe)

	descuento25 = importe * 25 / 100

	resultado = importe - descuento25

	document.getElementById("txtIdResultado").value = resultado
}