/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

let numero;
let acumuladorPositivos = 0;
let acumuladorNegativos = 0;
let contadorNegativos = 0;
let contadorPositivos = 0;
let contadorCeros = 0;
let sumaPositivos;
let productoNegativos;

do {

	numero = parseInt(prompt("Ingrese un numero: "));

	if (numero < 0) {
		acumuladorNegativos = acumuladorNegativos + numero;
		contadorNegativos++;

	} else if (numero == 0) {
		contadorCeros++;


	} else {
		acumuladorPositivos = acumuladorPositivos + numero;
		contadorPositivos++;

	}

	seguir = prompt("Quiere ingresar otro numero?");

} while (seguir =="si") {

sumaPositivos = acumuladorPositivos++;
productoNegativos = acumuladorNegativos;

document.getElementById("txtIdSuma").value = sumaPositivos;
document.getElementById("txtIdProducto").value = productoNegativos;
}

}//FIN DE LA FUNCIÓN