/*3. Escribir un algoritmo que lea una cantidad y calcule el descuento
considerando que si la cantidad dada está por encima de 100 el descuento
es el 10% y si está por debajo de 100 el descuento es el 2%.*/

let monto = 100;
let descu =   0;

if(monto > 100)
{descu = (monto*10)/100}
else
{descu = (monto* 2)/100}

console.log(`Monto : ${monto} Descuento : ${descu}`);