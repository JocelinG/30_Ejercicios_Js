/*27. Escribir un algoritmo que determine cuántos trabajadores recibirán
un salario mayor o igual a 500, dadas la tarifa y las horas trabajadas.*/


let tarifas;
let horasTr;
let salario;
let trabaja = 0;
let contado = 0;

trabaja = prompt("Numero de empleados");

  for(let i=0; i<trabaja; i++)
  {

    tarifas = prompt("Ingrese el valor de la tarifa " + (i+1));
    horasTr = prompt("Ingrese horas trabajadas");
    salario = tarifas*horasTr;
    console.log(`SALARIO : ${salario}`)

      if(salario >= 500)
      {contado = contado +1}
      
  }

  console.log(`EMPLEADOS CON SALARIO MAYOR A 500  : ${contado}`)