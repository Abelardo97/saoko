console.log("Sesión JS03 Condicionales");


//++++++++++++++++++ Declaración de bloque  +++++++++++++++++++++++++
let nombre = "Rafa";
let  ciudad = "Guadalajara";
    
{
    const listado = ["Olivia","Benja","Luis","Linda"];
    let nombre = "Fer"
    let ciudad = "CDmx";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}`);//Fer CDmx
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
else{
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}

console.log("<---- Declaración despues del if ***>");

//++++++++++++++++++ Operador ternario  +++++++++++++++++++++++++
/**
 * Sintaxis: condición ? condición_verdadera : condición falssa;
 */

console.log(`La edad es ${edad > 24 ? "mayor" : "menor"}a 25`);
console.log(`La edad es ${edad === 25 ? " es igual": (edad >24  ? "mayor": "menor")} a 25`);
