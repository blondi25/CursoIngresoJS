/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let numero;
let promedio;
let suma = 0;
let i = 0;
let seguir;
 
do {

	numero = parseInt(prompt("Ingrese un numero: "));
	suma = suma + numero;

	i++;

	seguir = prompt("Quiere ingresar otro numero?");

} while (seguir == "si");

promedio = suma / 5;

document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN