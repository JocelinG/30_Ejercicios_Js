
/*21. Desarrollar un algoritmo para calcular e imprimir el factorial de un
número dado.*/

const factorial= (num) =>
{
 
  num = parseInt (prompt("Ingrese un numero"));

  if (num === 0 || num === 1)
  return 1;

  for (let i = num - 1; i >= 1; i--)
  {num *= i;}

  console.log(`RESULTADO :${num}`);
}

factorial();