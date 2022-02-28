function mostrar()
{
let numero;
let contadorPares = 0;
let acumuladorPares = 0;

numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 == 0) {
	contadorPares++;
}

for (let i = 1; i <= numero;  i++) {
	alert("Los numeros pares entre 1 y " + numero + "son "+ acumuladorPares + "y la cantidad de numeros pares es de " + contadorPares);
}
acumuladorPares= acumuladorPares + numero;

}//FIN DE LA FUNCIÓN