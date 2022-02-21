function mostrar()
{
let numero1;
let numero2;
let resultado;

numero1 =prompt("Ingrese el primer numero");
numero1 = parseInt (numero1);

numero2 =prompt("Ingrese el segundo numero");
numero2 = parseInt(numero2);

resultado = numero1 + numero2

if (numero1 == numero2) {

    alert(""+ numero1 + numero2) 

} else {

    if (numero1 > numero2) {

        alert(numero1 - numero2);

    } else {

        if(resultado > 10) {

            alert("La suma es " + resultado + " y supero el 10")

        } else {

            alert(resultado)
        }

        }
    }

} 