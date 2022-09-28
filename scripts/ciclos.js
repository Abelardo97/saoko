console.log("Sesión JS04 Ciclos");

/**
 * La razon del por  que se recomienda declarar un arreglo u objeto con const, es
 * para evitar que se cambie el "tipo de dato" 
 */

//declarando arreglos
let arrayLet = [1,2,3];
const myArray = [10,11,12];

//arrayLet = "Holi crayoli";
//myArray = "Holi crayoli 2";

//agregando elementos al final de mi arereglo
myArray.push("holi crayoli 2"); //Metodo push, se encuentra en el indice 3
myArray[myArray.length] = "Holi crayoli 3"; //el .length para conocer la longitud del array
myArray[5]="xd";
myArray[3]="Mel";//Se reemplaza el indice 3 por "Mel"


//Function para reemplazar un dato del arreglo
function reemplazar(myArray) {
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] === "Holi crayoli 3") myArray[index] = "Omar";
    }
        return myArray;
    }
    console.log(reemplazar(myArray));
    
/* //Rafa
function reemplazar(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace) //Si no existe retorna -1
    if (index>-1) myArray[index] = newString
    return myArray;
}
console.log(reemplazar(myArray, "xd45", "Rafa"));
 */

//Rafa 2.0 //Refactorizado
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
        ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
        : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);


//funcion
    function reemplazarMargarita(myArray) {
            return evaluacion ? myArray[myArray.indexOf('xd')] = "Rafa" : myArray;
        }
        console.log(reemplazar(myArray));
    
//console.log(arrayLet);




/************************************************** */
/**
 * FIFO:
 * 
 *  Ele3 Ele2 Ele1   ---> [ arreglo ] ---> Ele3 Ele2   Ele1
 *  
 * 
 * LIFO:
 *         ELE3 ELE2    ELE1   ---> [ Arreglo ]  ---> ELE1  ELE2    ELE3
 * 
 */

console.log("#####  FIFO LIFO ######")
        // 0    1   2   

//declaracion de arreglo de FIFO
const perecederos = ["manzanas","quesos","fresas"];

//Agregamos un elemento al final del arreglo:
perecederos.push("leche"); //sera mi cuarto elemento
console.log(perecederos);
//Sacamos el primer elemento del arreglo
console.log("Elemento eliminado: " + perecederos.shift());
console.log(perecederos);

//LIFO
console.log("/n -------- LIFO---------");
const tienda = [...perecederos]; //se clona el arreglo --> const tienda = perecederos.slice();
console.log(tienda);
//Agregamos un elemento al final del arreglo
tienda.push("el amor");//será mi 4o elemento
console.log(tienda);
//Sacamos el ultimo elemento en entrar
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);

/********************** */

//Modificar el arreglo
//[2,3,4,5,6];

const arrayNumbers = [1, 2, 3, 4, 5];


function duplicar (array1){
    const total = [...array1]; 
     for (let i=0; i<array1.length; i++){
        //(array1[i] *= 2); // array1[i] = array[i] *2
        //total.push(array1[i]* 2 );
        total[i]*=2;
    }
        return total;
}

//usando la funcion Map refactorizacion
const duplicated = arrayNumbers.map(num => num * 2)

console.log("original " + arrayNumbers);
console.log( duplicar (arrayNumbers));
console.log(duplicated);

//---------------------------------

//--------------------------------------------------------
console.log("##### Calcular el factorial de un número ######");

let num = 5; // Número del que queremos calcular el factorial
let fact = 1;
for(let i = num; i>0; i--){
    fact *= i;
}
console.log(fact);


function facto(n){
    return n === 1  ? 1 : n * facto(n - 1);
}
console.log(`El factorial de ${n=5} es:`+ facto(n));




//--------------------------------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');
function countE(word) {
        const arrayOfChar = word.split("")
        const arrayOfLetterE =  arrayOfChar.filter((char) => char === "e")
        return arrayOfLetterE.length
      }
    console.log(countE("Pepe Pecas Pica Papas pero"));
    console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b));
    
/*
const phrase = "Pepe Pecas Pica Papas"
const getHowManyCharacters = (str, ch) => str.split("").filter(e => e === ch).length
console.log(getHowManyCharacters(phrase, "e"))
  */
 
const phrase = "Pepe Pecas Pica Papas"
const getHowManyCharacters = (quote, character) => quote.split("").filter(element => element === character).length
console.log(getHowManyCharacters(phrase, "e"))


const buscarCaracter = (cadena, caracter) => cadena.split
(caracter).length-1;

console.log(buscarCaracter("pepe pecas pica papas pero","e"));
