
/*14. "TIENDAS PATITO" se encuentra de aniversario y ha programado una
serie de ofertas con la finalidad de brindar facilidades a sus clientes y
al a vez de incrementar sus ventas. Estas ofertas se basan específicamente
en un porcentaje de descuento sobre el total de compra el cual varia de
acuerdo al monto. Por un monto mayor o igual a $500 se hará un descuento
del 30%. Por un monto menor de $500 pero mayor o igual a 200 se hará un
descuento del 20%.Por un monto menor de $200 pero mayor o igual a 100 se
hará un descuento del 10%. Escribir un algoritmo que calcule la cantidad
total a pagar de una compra.*/

 
    let monto = 0;
    const total = (monto) =>
{
    let descuento1 = 0;
    let descuento2 = 0;
    
        if (monto >= 500)
        {descuento1 = monto *0.3;
         descuento2 = monto - descuento1;}
        
        else if(monto >= 200)
        {descuento1 = monto * 0.2;
         descuento2 = monto - descuento1;}
        
        else if(monto>=100)
        {descuento1 = monto * 0.1;
         descuento2 = monto - descuento1;}
        
        else
        {descuento2 = monto;}

        console.log(`Total : ${descuento2} Descuento : $${descuento1}`);

}

total(492);