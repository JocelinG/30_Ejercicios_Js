
/*10. Dadas 3 longitudes, escribir un algoritmo que determine mediante un
mensaje si tales longitudes forman un triangulo: equilátero (cuando sus
tres lados son iguales), isósceles (cuando dos de sus lados son iguales) o
escaleno (cuando sus tres lados son diferentes), o no forman triangulo
(cada lado tiene que ser menor que la suma de los otros dos).*/

let x1 = 0;
let x2 = 0;
let x3 = 0;

for (let i = 1; i <= 4; i++) 
{
    let lado1 = 4 //parseInt(prompt('Ingrese primer lado:')); DATOS EJEMPLO, CAMBIAR A PARSEINT PARA LEER DESDE CONSOLA
    let lado2 = 4 //parseInt(prompt('Ingrese segundo lado:'));
    let lado3 = 4 //parseInt(prompt('Ingrese tercer lado:'));

            if (lado1 == lado2 && lado1 == lado3) 
            {console.log(`Hay un Triangulo Equilátero`);
             x1++;} 
            else 
            {
                if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
                   {console.log(`Triangulo Isósceles`);
                    x2++;}

                    else 
                    {console.log(`Triangulo Escaleno`);
                    x3++;}
            }
        }

        console.log(`Triángulo Equilátero Medidas : ${x1}`);
        console.log(`Triángulo Isósceles  Medidas : ${x2}`);
        console.log(`Triángulo Escaleno   Medidas : ${x3}`);