/*6. Escribir un algoritmo que lea las horas trabajadas de una persona y la
tarifa de pago para calcular su salario e imprimirlo.*/

let horas;
let tarifa;
let salario;

const darSalario = (tarifa, horas) => 
{

    if (tarifa === undefined) 
    return console.log(`Valor no valido.`);

    if (horas === undefined) 
    return console.log(`Valor no valido.`);

    if (typeof(tarifa) !== "number") 
    return console.error(`Error ${tarifa} no es valido.`);

    if (typeof(horas) !== "number") 
    return console.error(`Error ${horas} no es valido.`);

    if (tarifa <= 0) 
    return console.error("El valor debe cer mayor a 0");

    if (horas <= 0) 
    return console.error("El valor debe cer mayor a 0");

    salario = horas * tarifa;
    console.log(`\nSalario Total :  ${salario}.`);
  }
    
  console.log(`PRUEBA 1`); darSalario(10,20);
  console.log(`PRUEBA 2`); darSalario(10,50);
