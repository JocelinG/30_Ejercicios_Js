/*5. Escribir un algoritmo que lea un tiempo en minutos y que calcule los días,
horas y minutos que le corresponden.*/

let tiempo  = 1440;
let dias    = 0;
let horas   = 0;
let minutos = 0;

if(dias = (tiempo / 1440))
   a1      = tiempo % 1440;
   horas   = a1 / 60;
   minutos = a1 % 60;
   console.log(`Días: ${dias}, Horas: ${horas}, Minutos: ${minutos}`);