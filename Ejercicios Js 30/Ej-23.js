/*23. Escribir un algoritmo que calcule la suma y el producto de los
números pares comprendidos entre 20 y 400 incluyendo ambos.*/



const supro = () =>
{
  let suma = 0;
  let prod = 1;

  for(let i =20; i<401; i++)
  {
    if(i%2 === 0)
    {
      suma = suma + i;
      prod = prod * i;
    }
  } 

  console.log(`SUMA    : ${suma}`);
  console.log(`PODUCTO : ${prod}`);
}

supro();