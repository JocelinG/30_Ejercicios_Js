
/*26. Escribir un algoritmo que permita calcular y mostrar el jornal
mensual de una empresa de acuerdo con las siguientes especificaciones:
· los trabajadores tienen dos turnos (nocturno y diurno)
· la tarifa de las horas diurnas es de 10 pesos.
· La tarifa de las nocturnas es de 20 pesos.
· Ningún trabajador recibe nada por sábados o domingos.
· El trabajador será despedido si sus horas trabajadas son menores que
15.
El algoritmo termina cuando sea dado cero como horas trabajadas.*/


const jornal = () =>
{
let hrTrab;
let diasTr;
let turnoT;
let jornal;

    turnoT = (prompt("Ingrese un turno"));
    if(turnoT === "diurno" ||turnoT === "DIURNO" )
      {
        hrTrab = (prompt("Ingrese horas trabajadas"));
        if(hrTrab < 15)
        {
        console.log(`TRABAJADOR DESPEDIDO`)
        jornal = 10 * hrTrab;
        console.log(`PAGO : ${jornal}`)
        }
        else 
          {
            jornal = 10 * hrTrab;
            console.log(`PAGO : ${jornal}`)
          }
      }
      else console.log(`Datos no valios`) 
      return(0);

      if(turnoT === "nocturno" ||turnoT === "NOCTURNO" )
      {
        hrTrab = (prompt("Ingrese horas trabajadas"));
        if(hrTrab < 15)
        {
        console.log(`TRABAJADOR DESPEDIDO`)
        jornal = 20 * hrTrab;
        console.log(`PAGO : ${jornal}`)
        }

        else 
          {
            jornal = 20 * hrTrab;
            console.log(`PAGO : ${jornal}`)
          }
      }
      else console.log(`Datos no validos`)
      return(0);
    
  }

jornal();