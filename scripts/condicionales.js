console.log("Sesión JS03 Condicionales");

//++++++++++++++++++ Declaración de bloque  +++++++++++++++++++++++++
let nombre = "Rafa";
let ciudad = "Guadalajara";

{
  const listado = ["Olivia", "Benja", "Luis", "Linda"];
  let nombre = "Fer";
  let ciudad = "CDmx";
  let apellido = "Palapa";
  console.log(`Mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}`); //Fer CDmx
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`); //Rafa

//++++++++++++++++++ Condicional IF  +++++++++++++++++++++++++
/**
 * Sintaxis:
 *        if(condiciónVerdadera ) instrucción;
 *
 *        if(condiciónVerdadera ) {
 *                 instrucciones;
 *                }
 */

let edad = 25;
console.log("***Declaración antes del if ***");

if (edad > 24) console.log("La edad es mayor a 25");
else {
  console.log("La edad es menor a 25");
  console.log("Seguiremos evaluando");
}

console.log("<---- Declaración despues del if ***>");

//++++++++++++++++++ Operador ternario  +++++++++++++++++++++++++
/**
 * Sintaxis: condición ? condición_verdadera : condición falssa;
 */

console.log(`La edad es ${edad > 24 ? "mayor" : "menor"}a 25`);

let comparacion = edad === 25 ? " es igual" : edad > 24 ? "mayor" : "menor";
console.log(`La edad es$ { comparacion } a 25`);

//++++++++++++++++++ Condicional IF, Else if, else  +++++++++++++++++++++++++
/**
 * Sintaxis:
 *        if(condiciónVerdadera ){
 *              instrucciones;
 * }
 * else if (Otracondición ) {
 *    }
 *  * else if (Otracondición ) {
 *    }else{
 *          instrucciones;
 *       }
 */

console.log("===== Uso de if, else if, else=======");

edad = 25;  


//console.log(`La edad es ${edad === 25 ? "es igual": edad> 24 ? "mayor":"menor"} a 25`);

if (edad === 25) comparacion = "igual";
else if (edad > 24) comparacion = "mayor";
else comparacion = "menor";

console.log(`La edad es ${comparacion} a 25`);



//++++++++++++++++++ Condicional Switch  +++++++++++++++++++++++++
/**
 * Sintaxis:
 *        switch(expresion){
 *            case valor1:
 *                  instrucciones;
 *                  break;
 *            case valor2:
 *                  instrucciones;
 *                  break;
 *            case valor3:
 *                  instrucciones;
 *                  break;
 *           defaul:
 *                  instrucciones;
 *       }
 */


edad = 26;
comparacion = "";

switch (edad) {
    case 25:
        comparacion= "es igual";
        break;
    case 24:
        comparacion = "es menor";
        break;
    case 26:
        comparacion = "es mayor";
        break;        
    default:
        comparacion =  "no se puede saber"
        break;
}

console.log(`(switch) La edad ${comparacion} a 25`);


/*
let numeroMes = 1;
let estacion = "", mes = "";

switch (numeroMes) {
    case 12:
        mes = "Diciembre";
        estacion = "Invierno";
        break;
    case 1:
        mes = "Enero";
        estacion = "Invierno";
        break;
    case 2:
        mes = "Febrero";
        estacion = "Invierno";
        break;
    case 3:
        mes = "Marzo";
        estacion = "Primavera";
        break;
    case 4:
        mes = "Abril";
        estacion = "Primavera";
        break;
    case 5:
        mes = "Mayo";
        estacion = "Primavera";
        break;
    case 6:
        mes = "Junio";
        estacion = "Verano";
        break;
    case 7:
        mes = "Julio";
        estacion = "Verano";
        break;
    case 8:
        mes = "Agosto";
        estacion = "Verano";
        break;
    case 9:
        mes = "Septiembre";
        estacion = "Otoño";
        break;
    case 10:
        mes = "Octubre";
        estacion = "Otoño";
        break;
    case 11:
        mes = "Noviembre";
        estacion = "Otoño";
        break;
    }

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);
*/


/*
let numeroMes = 1;
let estacion = "";
let mes = "";

if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
    }
    else if (numeroMes >= 3 && numeroMes <= 5) {
        estacion = "Primavera";
        if (numeroMes === 3) mes = "Marzo";
        else if (numeroMes === 4) mes = "Abril";
        else mes = "Mayo";
    }
    else if (numeroMes >= 6 && numeroMes <= 8) {
        estacion = "Verano";
        if (numeroMes === 6) mes = "Junio";
        else if (numeroMes === 7) mes = "Julio";
        else mes = "Agosto";
    }
    else if (numeroMes >= 9 && numeroMes <= 11) {
        estacion = "Otoño";
        if (numeroMes === 9) mes = "Septiembre";
        else if (numeroMes === 10) mes = "Octubre";
        else mes = "Noviembre";
    }
    else {
        estacion = "No se encontro";
        mes = "No se encontro";
    }

    console.log(" (Alan) El mes de " + mes + " se encuentra en la estación " + estacion);
*/



let online  = true;
let active = true;
/*
if(online){
    if(active){
        console.log('James');
    }
}*/

//if(online && active) console.log('James')

online && active && console.log('James')





/*
//And Or
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op=( num1 < num2||num2 < num3) && (!(num1 && num5 != num3));
console.log(op);

*/

/*

let valor = Math.sign(25 - edad);
switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}
console.log(`La edad es ${comparacion} a 25.`);
*/