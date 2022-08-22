/*7. Escribir el algoritmo que permita emitir la factura correspondiente a una
compra de un articulo determinado, del que se adquieren una o varias
unidades. El IVA es del 15% y si el precio neto ( precio venta mas IVA) es
mayor de 50.00 pesos se debe realizar un descuento del 5%.*/


let precioI    = 0;
let NArticulos = 0;
const Factura  = (precioI,NArticulos) => {
 
    precioV = precioI * NArticulos;
    IVA     = precioV * 0.15;

    precioN= precioV + IVA;
    if (precioN >= 50)
    {
        descuento = precioN *0.05;
        console.log(`Factura
                     Articulos Comprados ${NArticulos},
                     Precio Total $${precioN}, el descuento es $${descuento}`);
      
    }

    else {
    descuento = 0;
    console.log(`Factura
                 Articulos Comprados ${NArticulos},
                 Precio Total $${precioN}, el descuento es $${descuento}`);
    }
           }

console.log(`PRUEBA 1`);Factura(100,1);
console.log(`PRUEBA 2`);Factura(200,2);
console.log(`PRUEBA 3`);Factura(300,3);
