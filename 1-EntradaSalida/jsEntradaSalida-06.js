/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1
	let numero2

	numero1 = document.getElementById("txtIdNumeroUno").value 

	numero2 = document.getElementById("txtIdNumeroDos").value
	
	suma = numero1 + numero2

	alert("La suma es " + suma);
}

