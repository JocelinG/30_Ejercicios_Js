
/*19. Dado un número n, escribir un algoritmo que determine la suma de sus
dígitos.*/


let numero = [9, 4, 2];
const suma = (x1) =>
{
    let suma  = 0;
    for(let i = 0; i < 3 ; i++)
    {suma += x1[i]}

    return suma;
}

console.log((`RESULTADO :${suma(numero)}`));