/*
Escribir un algoritmo que lea varios caracteres, uno a la vez, y que
se detenga cuando sea dada alguna de las vocales y la escriba.
*/

const caracteres = () => 
{

    
    let valor  = 0;
    let vocal  = 0;
    let cadena = [];


  while (vocal !== true) 
    {
      valor =  (prompt("Ingrese un numero"));
      cadena.push(valor);
      
        for (let letra of cadena)
        {
            if (/[AEIOUaeiou]/.test(letra)) 
            {
                vocal = true;
                console.log(`FIN: ingresò la letra "${letra}"`);
            }
        }
        
    }  
}   
caracteres();