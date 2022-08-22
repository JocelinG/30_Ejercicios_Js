/*18. Dadas N notas de un estudiante, escribir un algoritmo que calcule:
a) Cuántas notas tiene desaprobadas.
b) Cuántas aprobadas.
c) El promedio de notas.
d) El promedio de notas aprobadas y el de desaprobadas.*/


let repro = [] ;
let aprob = [];

const notas = (caden = []) => 
{

    if (!caden)
    return console.warn("Ingrese sus notas"); 

    if (!Array.isArray(caden)) 
    return console.warn("Valores no validos"); 

       for (let num of caden) 
       {
          if (typeof num !== "number")
          {return console.log("El arreglo debe de ser numericos")}

          repro = caden.filter(num => num <=5);
          aprob = caden.filter(num => num >=6);
       }

    console.info(`REPROBADOS     : ${repro}`);
    console.info(`APROBADOS      : ${aprob}`);
    console.info(`*************************`);
    console.info(`PROMEDIOS`);
    console.info(`TOTAL      : ${promedio = (caden.reduce((previous, current) => current += previous)) / caden.length}`);
    console.info(`REPROBADOS : ${promedio = (repro.reduce((previous, current) => current += previous)) / repro.length}`);
    console.info(`APROBADOS  : ${promedio = (aprob.reduce((previous, current) => current += previous)) / aprob.length}`);
    
      }
    
notas([8,9,0,5]);