
/*17. Modificar el ejercicio 1 para obtener la suma de los salarios de 200
trabajadores.*/


let horTra  = 450;// VALOR PREDETERMINDO, AGRGAR RAMNDOM SI SE DESEN MAS VALORES
let tarifa  =  50;
let horExt  =   0;
let salario =   0;
let tarExt  =   0;

for(let i=0; i<3; i++)
{

if(horTra[i] <= 40)
{salario = horTra*tarifa;}
else
{
    tarExt  = tarifa + (0.50 * tarifa);
    horExt  = horTra[i] - 40;
    salario = (horTra * tarExt) + (40 * tarifa);
}
}

const cadena = Array(200).fill(salario);
console.log(`El salario de 200 empleados ${cadena}`);