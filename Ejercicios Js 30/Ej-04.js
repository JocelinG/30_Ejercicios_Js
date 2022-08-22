/*4. Escribir un algoritmo que lea un tiempo en segundos y que calcule los
segundos restantes que le correspondan para convertirse exactamente en
minutos.*/



let segundT = 100;
let minutos = 0;
let segundR = 0;

minutos = (segundT / 60)
segundR = (segundT % 60)

console.log(`Tiempo : ${minutos} Segundos ${segundR}`);