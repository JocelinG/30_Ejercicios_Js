/*28. Escribir un algoritmo que clasifique a 50 personas según su edad y
sexo, al final deberá escribir la cantidad de personas masculinas mayores
de edad, la cantidad de personas femeninas menores de edad, cantidad de
personas mayores y menores, además deberá indicar el porcentaje que
representan las personas mayores y las menores, de edad.*/

let edad;
let sexo;
let conta1=0, conta2=0, conta3=0, conta4=0;


let personas = 0;
personas = prompt("Numero de personas a evaluar :");

for(let i=0; i<personas; i++)
{
  edad = prompt("Ingrese la edad " + (i+1));
  sexo = prompt("Ingrese el sexo (F) ó (M) ");

if(edad>18 && sexo=="M")
{conta1++;}

if(edad<19 && sexo=="F")
{conta2++;}

if(edad<19)
{conta3++;}

if(edad>18)
{conta4++;}
}


console.log(`Hombres mayores de edad  : ${conta1}`);
console.log(`Mujeres menores de edad  : ${conta2}`);
console.log(` `);
console.log(`Personas menores de edad : ${conta3}`);
console.log(`Personas mayores de edad : ${conta4}`);
console.log(` `);
console.log(`Promedio de las personas menores de edad: ${(conta3/personas)*100}%`);
console.log(`Promedio de las personas mayores de edad: ${(conta4/personas)*100}%`);