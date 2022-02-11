/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
let producto1
let producto2
let producto3
let suma	

producto1 = document.getElementById("txtIdPrecioUno").value 
producto1 = parseFloat(producto1)

producto2 = document.getElementById("txtIdPrecioDos").value 
producto2 = parseFloat(producto2)

producto3 = document.getElementById("txtIdPrecioTres").value 
producto3 = parseFloat(producto3)

suma = producto1 + producto2 + producto3

alert(suma)
}
function Promedio () 
{
    let producto1
    let producto2
    let producto3
    let suma
    let promedio	
    
    producto1 = document.getElementById("txtIdPrecioUno").value 
    producto1 = parseFloat(producto1)
    
    producto2 = document.getElementById("txtIdPrecioDos").value 
    producto2 = parseFloat(producto2)
    
    producto3 = document.getElementById("txtIdPrecioTres").value 
    producto3 = parseFloat(producto3)
    
    suma = producto1 + producto2 + producto3 
    promedio = suma / 3
    
    alert(promedio)
    }

function PrecioFinal () 
{
    let producto1
    let producto2
    let producto3
    let suma
    let suma21
    
    producto1 = document.getElementById("txtIdPrecioUno").value 
    producto1 = parseFloat(producto1)
    
    producto2 = document.getElementById("txtIdPrecioDos").value 
    producto2 = parseFloat(producto2)
    
    producto3 = document.getElementById("txtIdPrecioTres").value 
    producto3 = parseFloat(producto3)
    
    suma = producto1 + producto2 + producto3

    suma21 = suma + suma * 21 / 100
    
    alert(suma21)
    }