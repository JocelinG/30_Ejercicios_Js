/*12. Katthy organiza una fiesta en la cual una computadora controla el
ingreso mediante 5 claves. Si se ingresa al menos una clave incorrecta la
computadora imprimirá "TE EQUIVOCASTE DE FIESTA" y no permitirá el
ingreso. Si las 5 claves son correctas imprimirá "BIENVENIDO A LA FIESTA".
Escribir un algoritmo que realice lo anterior.
Las Claves son:
1: "TIENES"
2: "QUE SER"
3: "INVITADO"
4: "PARA"
5: "INGRESAR"*/

const claves= (c1,c2,c3,c4,c5) =>
 {

    
    if(c1==="TIENES" && c2==="QUE SER" && c3==="INVITADO" && c4==="PARA" && c5==="INGRESAR")
    {console.log(`*BIENVENIDO A LA FIESTA*`)}
    else
    {console.log(`TE EQUIVOCASTE DE FIESTA  `)}

 }

console.log(`PRUEBA 1`);
claves("TIENES","QUE SER","INVITADO","PARA","INGRESAR");
console.log(`PRUEBA 2`);
claves("TIENES","QUE XXX","INVITADO","PARA","INGRESAR");
    