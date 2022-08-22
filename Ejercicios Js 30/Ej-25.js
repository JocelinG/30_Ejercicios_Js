
/*25. El ing. De sistemas de un banco de crédito necesita conocer de una
lista de 2500 cuentas cuál es la que posee mayor cantidad y cuál es la que
posee menor cantidad, de dinero. Escriba un algoritmo que realice lo
anterior, sin ordenar las cuentas.*/


const opr = () => 
{
  const cadena =[];

     for (let i = 0; i <=10 /*2500*/; i++) //MODIFICADO PARA HACER PRUEBAS, CAMBIAR PARA PROGRAMA ORIGINAL
     {cadena[i]= (Math.round(Math.random() * 1000)+1000);}

    return console.info(`${cadena}
    Mayor : ${Math.max(...cadena)} 
    Menor : ${Math.min(...cadena)}`);  
}   //DATO IM¿NCOMPLETO, REVISAR VIDEO 46 JS JHONMIRCHA
opr();


