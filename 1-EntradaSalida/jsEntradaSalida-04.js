/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre

	//guardo en la variable nombre el texto que escribio el usuario en la ventana prompt
	nombre =prompt("Ingrese su nombre")
	
	//Copio en nombre lo que tengo guardado en la caja de txt de html
	document.getElementById("txtIdNombre").value = nombre
	
}

