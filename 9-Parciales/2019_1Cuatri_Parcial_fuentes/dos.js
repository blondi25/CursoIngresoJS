function mostrar()
{
let nombre1;
let nombre2;
let peso1;
let peso2;
let pesoTotal;
let promedioPeso;

nombre1 =prompt("Ingrese su nombre");
nombre2 =prompt("Ingrese el nombre de su pareja");
peso1 =prompt("Ingrese su peso en kilogramos");
peso1 = parseInt(peso1);
peso2 =prompt("Ingrese el peso de su pareja en kilogramos");
peso2 = parseInt(peso2);

pesoTotal = peso1 + peso2;
promedioPeso = pesoTotal / 2;

alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2 + ", que sumados son " + pesoTotal + " kilos y el promedio de peso es " + promedioPeso)

}
