/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
    let contadorPositivos = 0;
    let contadorNegativos = 0;
	let contadorCeros = 0;
    let acumuladorPositivos = 0;
    let acumuladorNegativos = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;


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
	
		if (numero % 2 == 0) {
			contadorPares++;
		}
	
		seguir = prompt("Quiere ingresar otro numero?");
	
	} while (seguir =="si") {
	
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	
	diferencia = acumuladorPositivos - acumuladorNegativos;
	
	}
	

	document.write ("1. La suma de negativos es : " + acumuladorNegativos);
	document.write ("2. La suma de positivos es : " + acumuladorPositivos);
	document.write ("3. La canticad de positivos es : " + contadorPositivos);
	document.write ("4. La cantidad de negativos es : " + contadorNegativos);
	document.write ("5. La cantidad de ceros es : " + contadorCeros);
	document.write ("6. La cantidad de numeros pares es : " + contadorPares);
	document.write ("7. El promedio de positivos es : " + promedioPositivos);
	document.write ("8. El promedio de negativos es : " + promedioNegativos);
	document.write ("9. La diferencia entre positivos y negativos es : " + diferencia);

}
