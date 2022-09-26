console.log("Sesion JS02 Funciones");
/**
 * Este es un ejemplo de una funcion declarada (function declaration, function
 * statement)
 * una caracteristica de las funciones declaradas, es que tiene un hoisting (elevacion)
 * Realiza la multiplicacion de 2 numeros
 * @param {Number} a multiplicando
 * @param {Number} b multiplicador
 * @returns  resultado de la multplicacion a*b
 */
function multiplica(a,b){
    return a *b ;
}

//Llamado de la funcion declarada
console.log("Multiplica 5 * 6 = " + multiplica(5,6));


//+++++++++++++++++++ Funcion expresada ++++++++++++++++
/**
 * Las funciones expresadas (function expressions) son declardas dentro de la asignacion de una variable
 * Estas funciones pueden ser anonimas (no tener nombre)
 * Las funciones expresadas no tienen hoisting
 */
/**
 * Sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns  Resultado de a + b
 */
const suma = function (a,b) {
    return a+ b; 
} 
console.log("El resultado de 56 + 4 = " + suma(56,4));


//+++++++++++++++++++ Función autoinvocada ++++++++++++++++
/**
 * Las funciones autoinvocadsa (self-invoking functions)
 * Pueden ser anonimas y se autoejecutan() en su declaración (function)().
 * 

*/

(function(){
    console.log("=================");
    console.log("Hola crayoli");
    console.log("===================");
})();


//+++++++++++++++++++ Función flecha ++++++++++++++++
/**
 * Las funciones flecha (arrow functions) funcionan similar a las funciones
 * declaradas pero no requieren la palabra "function" y si tienen
 * una sola instrucción y es el retorno, no requiere la instrucción 2return"
*/
/**
 * Realiza la operación de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns  La resta d a - b
 */

const resta = (a,b) => a-b;
console.log("La resta de 10 - 5 = " + resta(10,5));


//+++++++++++++++++++ Parametros Default ++++++++++++++++
/**
 * Función con parametros inicializados
 * 
 */

function divide(a,b=0){
    return a/b;
}
console.log("La division de a/b = " + divide(4));

//+++++++++++++++++++ Funciones Recursivas ++++++++++++++++
function factorial(num) {
    if (num <= 0) return 1;
    return (num * factorial(num-1)); 
        
    
}

console.log("El factorial de 5 = " + factorial(5));