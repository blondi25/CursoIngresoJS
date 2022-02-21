function mostrar()
{
	let estado;
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value

	if (estado == "Soltero" && !(edad < 18)){

		alert("Es soltero y no es menor");

	}
}