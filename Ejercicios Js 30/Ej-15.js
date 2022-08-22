/*15. Escribir un algoritmo que permita escoger en un conjunto de números
naturales:
Cuáles son menores que 15.
Cuáles son mayores de 50.
Cuáles están comprendidos entre 25 y 50.
El algoritmo termina con el ingreso de un número negativo.*/

let x = 0; //Numero natural
let a = 0; //Menores a 15
let b = 0; //Mayores a 50
let c = 0; //Entre 25 y 50

const seleccion = (x) => 
{
     while(x >= 0)
      {
      if(x<15) {a+1; console.log(`Menores a 15  : ${a}`)}
      if(x>50) {b+1; console.log(`Mayores a 50  : ${b}`)}
      if(x >= 25 && x <= 50) {c+1; console.log(`Entre 25 y 50 : ${c}`)} 
      }
}

  
seleccion(10);  
seleccion(51);   
seleccion(26);  