/*  9. Escribir el algoritmo que lea una hora y que muestre la programación de
    acuerdo al horario en que se transmite “dibujos animados ” : Si es de 10 a
    12 horas, “ tele serie ” : si es de 13 a 16 horas, “ novelas repetidas ” :
    si es de 16 a 18 horas, “dibujos animados ” : si es de 18 a 22 horas,
    “noticiero” : si es de 22 a 23 horas. */


    const TV = (hora) => 
    {
      let descuento;
      if ((10 <= hora & hora <= 12) || (18 <= hora & hora < 22)) 
      return console.log(`Dibujos Animados`)

      if (13 <= hora & hora <= 15) 
      return console.log(`tele serie`)

      if (16 <= hora & hora < 18) 
      return console.log(`novelas repetidas`)

      if (22 <= hora & hora <= 23) 
      return console.log(`noticiero`)

// VALORES NO VALIDOS
      if (hora === undefined) 
      return console.log(`Valor no valido.`);

      if (typeof(hora) !== "number") 
      return console.error(`Error ${hora} no es valido.`);

      if (hora <= -1) 
      return console.error("La valor debe ser mayor a 0");
    }

    console.log(`PRUEBA 1`); TV(10);
    console.log(`PRUEBA 2`); TV(15);
    console.log(`PRUEBA 3`); TV(20);
    
  