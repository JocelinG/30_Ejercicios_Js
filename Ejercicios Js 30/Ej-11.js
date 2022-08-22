
/*11. Una tienda se dedica a la venta de computadoras, cada vendedor
tiene un sueldo mensual pero además de su sueldo gana una comisión por
venta: Si el monto de venta es mayor de 10,000 la comisión será del 15%.
Si el monto de venta es mayor o igual a 5,000 y menor de 10,000 la
comisión es del 5%. Si el monto de la venta es menor que 5,000 no tiene
comisión. Escribir un algoritmo que calcule el sueldo total de cada
vendedor.*/

const sueldo = () =>
{
    let comision; 
    let sueldo_Pagar; 
    let sueldoBasico; 
    let total_Ventas;

    // DATOS EJEMPLO 
    sueldoBasico = 100; //parseInt(prompt('Ingrese sueldo:')); CAMBIAR A PARSEINT PARA LEER DESDE CONSOLA; 
    total_Ventas = 500; //parseInt(prompt('Ingrese ventas:'));

    if(total_Ventas > 10000)
        comision=total_Ventas*0.15;
    else
        comision     = total_Ventas * 0.05;
        sueldo_Pagar = sueldoBasico + comision;
        
    console.log(`La comision es de ${comision} Sueldo Total ${sueldo_Pagar}`);
   
}

