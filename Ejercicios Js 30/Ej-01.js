 /*1. A un trabajador le pagan según sus horas y una tarifa de pago por
 horas. Si la cantidad de horas trabajadas es mayor a 40 horas. La
 tarifa se incrementa en un 50% para las horas extras. Calcular el
 salario del trabajador, dadas las horas trabajadas y la tarifa.*/

 let horTra  = 450;
 let tarifa  =  50;
 let horExt  =   0;
 let salario =   0;
 let tarExt  =   0;
 
 if(horTra <= 40)
 {salario = horTra*tarifa;}
 else
 {
     tarExt  = tarifa + (0.50 * tarifa);
     horExt  = horTra - 40;
     salario = (horExt * tarExt) + (40*tarifa);
 }
 
 console.log(`El salario es de:  $${salario}.00 pesos`);