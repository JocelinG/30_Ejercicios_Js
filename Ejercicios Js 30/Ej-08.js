/*8. Escribir el algoritmo que muestre el mensaje de acuerdo a la edad
ingresada: Si la edad es de 0 a 10 años “niño”, si la edad es de 11 a 14
años “púber” , si la edad es de 15 a 18 años “ adolescente” , si la edad
es de 19 a 25 años “joven” , si la edad es de 26 a 65 años “ adulto” , si
la edad es mayor de 65 “anciano”.*/


const IMEdad= (edad) => {
    if (!edad) return console.warn("Dato no valido");

    if (edad >= 0 && edad <= 10){
        console.log(`Niño`);}

    if (edad >= 11 && edad <= 14){
        console.log(`Puberto`);}

    if (edad >= 15 && edad <= 18){
        console.log(`Adolescente`);}

    if (edad >= 19 && edad <= 25){
        console.log(`Joven`);}

    if (edad >= 26 && edad <= 65){
        console.log(`Adulto`);}

    if (edad >=66){
        console.log(`Anciano`);}

}

console.log(`PRUEBA 1`); IMEdad(10);
console.log(`PRUEBA 2`); IMEdad(14);
console.log(`PRUEBA 3`); IMEdad(18);
console.log(`PRUEBA 4`); IMEdad(25);
console.log(`PRUEBA 5`); IMEdad(65);
console.log(`PRUEBA 6`); IMEdad(66);

