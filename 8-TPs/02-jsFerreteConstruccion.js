/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo
let ancho
let rectangulo
let perimetro

largo = document.getElementById("txtIdLargo").value 
largo = parseFloat(largo)

ancho = document.getElementById("txtIdAncho").value 
ancho = parseFloat(ancho)

rectangulo = (largo + ancho) * 2

perimetro = rectangulo * 3

alert("Se deben comprar " + perimetro + " metros de alambre.")

}
function Circulo () 
{
let radio
let circunferencia
let alambrar
    
radio = document.getElementById("txtIdRadio").value 
radio = parseFloat(radio)

circunferencia = radio * 2 * 3.14

alambrar = circunferencia * 3

alert("Se deben comprar  " + alambrar + " metros de alambre.")


}
function Materiales () 
{
    let largo
    let ancho
    let superficie
    let cemento
    let cal 
    
    largo = document.getElementById("txtIdLargo").value 
    largo = parseFloat(largo)
    
    ancho = document.getElementById("txtIdAncho").value 
    ancho = parseFloat(ancho)
    
    superficie = largo * ancho 

    cemento = superficie * 2
    cal = superficie * 3

    alert("Para el contrapiso de "+ superficie + "m cuadrados necesito comprar "+ cemento + " bolsas de cemento y "+cal+" bolsas de cal.")

    





}