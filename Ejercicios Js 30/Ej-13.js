
/*13.Escribir un algoritmo que calcule las raíces de una ecuación
cuadrática cuya forma canónica es:
Ax**2 + By + C = 0
Solo se calcularán raíces reales. si el discriminante en menor de 0,
imprimir un mensaje que indique que existen dos raíces imaginarias. Los
coeficientes A,B,C serán ingresados.*/


const x1 = 10;
const x2 =  2;
const x3 = 30;

const calcularD = (y1, y2, y3) => y2*y2 + 4*y1*y3;

const x4 = calcularD(x1,x2,x3);

console.log(`HAY 01 RAIZ REAL - RESULTADO : ${x4}`)
   
const calcularRP = (x2,y4) => 
{
    let z1 = -y2 + (Math.sqrt(y4)) / 2
    let w2 = -y2 - (Math.sqrt(y4)) / 2
    return z1, z2;
}
    
const calcularRN = (y2) => {
    return -y2 / 2;
}

const calcularRI = () => {
    return "RAICES IMAGINARIAS";
}

if (x4 > 0 ) 


console.log(`HAY 01 RAIZ IMAG - RESULTADO : ${calcularRN(x2, x4)}`);
else console.log(`RAIZ CUADRADA  ${calcularRI()}`);
