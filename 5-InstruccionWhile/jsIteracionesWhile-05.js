/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
let sexo;

sexo =prompt("Ingrese f para femenino y m para masculino");

while (sexo != "f" && sexo != "m") {
	sexo =prompt("Comando invalido. Por favor indique f o m");
}

document.getElementById("txtIdSexo").value = sexo;


}//FIN DE LA FUNCIÓN