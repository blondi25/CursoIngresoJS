/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numero;

numero =prompt("Ingrese un numero entre 0 y 9");
numero = parseInt(numero);
	
document.getElementById("txtIdNumero").value = numero;

while (isNaN(numero)==true || numero < 0 || numero > 9)
{
	numero =prompt("Numero invalido. Reingrese : ");
}
	alert("Numero valido.");
	
}//FIN DE LA FUNCIÓN