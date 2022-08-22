/*2. A un trabajador le descuentan de su sueldo el 10% si su sueldo es menor o
igual a 1000, por encima de 1000 y hasta 2000 el 5% del adicional, y por
encima de 2000 el 3% del adicional. Escribir un algoritmo que calcule el
descuento y sueldo neto que recibe el trabajador dado su sueldo.*/


let sueldo = 1500;
let suel_N =    0;
let descue =    0;

if(sueldo <= 100)
    {descue = sueldo*0.1}

else 
if(sueldo <= 2000)
{descue = ((sueldo-1000)*0.5) + (1000*0.1)}
else
{descue = ((sueldo-2000)*0.3) + (1000*0.1)}

console.log(`El descuento es de : ${descue}`);