/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo
	let aumento10
    let resultado
	
	sueldo = document.getElementById("txtIdSueldo").value 
	sueldo = parseInt(sueldo)

	aumento10 = sueldo * 10 / 100

	resultado = sueldo + aumento10

	document.getElementById("txtIdResultado").value = resultado
}
