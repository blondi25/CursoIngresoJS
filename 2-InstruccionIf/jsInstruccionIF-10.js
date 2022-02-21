function mostrar()
{
let nota;
let maximo = 10;
let minimo = 1;

nota = Math.round(Math.random()*(maximo - minimo) + minimo);
	
	if (nota == 9 || nota == 10) {

		alert("EXCELENTE. Nota:" + nota);
	} 
	else {

		if(nota > 4){

			alert("APROBO. Nota:" + nota);
		}
		else{

			alert("Vamos, la proxima se puede. Nota:" + nota);

		}
	}

}