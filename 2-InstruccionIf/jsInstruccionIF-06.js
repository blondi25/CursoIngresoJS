function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad < 13) {

		alert("Eres un niño");
	} 
	else {

		if(edad >=13 && edad <= 17){

			alert("Eres adolescente");
		}
		else{

			alert("Eres adulto");

		}
	}

}