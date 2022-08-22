
/*20. Realizar un algoritmo que permita pedir 50 números naturales y
determine e imprima cuántos son pares, impares, positivos y negativos.*/

const numeros = () =>
{
    
  let impar = 0; 
  let negat = 0;
  let numer = 0;
  let pares = 0; 
  let posit = 0;

  numer = parseInt (prompt("Ingrese un numero"));
    
    if(numer%2==0)
      {
        pares=pares+1; 
        console.log(`Pares       : ${pares}`);
      }
    else
      {
        impar=impar+1;
        console.log(`Impares     : ${impar}`);
      }

    if(numer<0)
      {
        negat=negat+1;
        console.log(`Negativos   : ${negat}`);
      }    
    else
      {
        posit=posit+1;
        console.log(`Positivos   : ${posit}`);
      }
}

numeros();