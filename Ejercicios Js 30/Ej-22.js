/*22. Escribir un algoritmo que calcule la media de 100 números dados e
imprima su resultado. */

const cadena = (arreglo = undefined) => 
{
    if(arreglo === undefined) 
    return console.warn("Valor no valido");
    
    console.info(`RESULTADO :  ${promedio = (arreglo.reduce((previous, current) => current += previous)) / arreglo.length}`);

}
    cadena([9,12,45,3,9,12,0,0,0,0,0]);
