function mostrar()
{
let numero1;
let numero2;
let resta;
let suma;

numero1 =prompt("Ingrese el primer numero");
numero1 =parseFloat(numero1);
numero2 =prompt("Ingrese el segundo numero");
numero2 =parseFloat(numero2);
resta = numero1 - numero2;
suma = numero1 + numero2;

if (numero1 == numero2) {
    alert(""+ numero1 + numero2);
}
else if (resta > 10) {
    alert("La resta es "+ resta + " y supero el 10");
} 
else if (numero1 > numero2) {
    alert(resta);
}
else {
    alert(suma);
}

}