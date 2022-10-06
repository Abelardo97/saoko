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

    //Function de Clarisa
    console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "p") * 1 ).reduce((a,b)=>a+b));
    //Ejercicio sacar cuentas veces aparece cada letra en javascript

/*
const phrase = "Pepe Pecas Pica Papas"
const getHowManyCharacters = (str, ch) => str.split("").filter(e => e === ch).length
console.log(getHowManyCharacters(phrase, "e"))
  */

const phrase = "Pepe Pecas Pica Papas"
const getHowManyCharacters = (quote, character) => quote.split("").filter(element => element === character).length
console.log(getHowManyCharacters(phrase, "e"))


const buscarCaracter = (cadena, caracter) => cadena.split(caracter).length-1;

console.log(buscarCaracter("Pepe Pecas Pica Papas pero","e"));

Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b)


const contarCaracteres = (frase, character) => frase.split("").filter(elemento => elemento === character).length

`Pepe Pecas Pica Papas pero`.split("").filter(elemento => elemento === 'p' || elemento === 'P').length;

//#####################################################################
/**
 * Sintaxis de ciclo For
 * for(inicio; condición; expresioónFinal){
 *      instrucciones; 
 * }
 */

console.log("n ### Ciclo For #####");

//Ejercicios de examen --->El resultado es= ERROR: Por el scope de la variable
/* for (let i=0; i<10; ++i)
    console.log("El valor de la iteración es: " + i);
    console.log("El valor de la iteración +1 = " + (i*1) );
 */


/*     for (let i=0; i<10; ++i){
    console.log("El valor de la iteración es: " + i);
    console.log("El valor de la iteración +1 = " + (i*1) );
} */

for (let i=0; i<10; i++)
console.log("El valor de la iteración es: " + i);


console.log("### For con continue y break ###");

let ch18 = ["Abelardo","Audrey","Angel","Sharon","Bren","Pato Lucas","Victor","Alex"];
/* for(let i=0; i<ch18.length; i++){
    if (ch18[i] === 'Pato Lucas') {
        console.warn("Atención, esta persona no pertenece a la CH18: " +ch18[i] );
        break;
    }
    console.log("Personas de CH18: " + ch18[i]);
} */

for(let i=0; i<ch18.length; i++){
    if(ch18[i] !== "Pato Lucas") continue;
    console.warn("Atención, esta persona no pertenece a la CH18: " +ch18[i] );
}



console.log("### Matrices ###");
//const generation = [ [],[],[]  ];

const generation = [
    ["Abelardo" , "Audrey"  ,"Angel"   , "Sharon", "Bren" , "El Bromas" , "Victor" , "Alex"],
    ["Yoseline" , "Mariana" ,"Karen"   , "Pedro"],
    ["Emiliano" , "Jonatan" ,"Esteban" , "El Bromas","Jose"]
];
//Imprimir cada arreglo
//console.log("Próxima presentación : " +generation[1][2]);//Esto apunta a Karen


/* //Iterando todos los elementos del arreglo
for(let i=0; i<generation.length;i++){
    console.log(`Los integrantes de la corte ${i+1} son: `)
    for(let j=0; j<generation[i].length;j++){
        console.log(generation[i][j]);//Iterando el arreglo [fila][columna]
    }
}
 */

//Detectar a "El Bromas" e indicar con un warn la cohorte donde se encuentra
continua_buscando: //Label
for (let i = 0; i < generation.length; i++) {
    for (let j = 0; j < generation[i].length; j++) {
        if(generation[i][j] === 'El Bromas'){
            console.warn(`El bromas se encuentra en la corte ${i} 
            en la posicion ${j} `);
            continue continua_buscando; //Muestra todas las veces que aperece "El Bromas" en el ciclo hasta acabar
            //break continua_buscando;//Con que encuentre solo 1 vez a "El Bromas" se detienen y rompe el ciclo
        }
        console.log(`Numero de iteracion ${i}-${j}`);
    }
}
  

//########################### Ciclo While ##########################################

console.log("#### Ciclo While ####");

/**
 * Sintaxis
 *          while (condición) {
 *      instrucción; 
 *     }
 */

//Encontrar un número que pensé, del 1 al 10;
/* let findNumber = true;
let number = 0; */
/* while (findNumber) {
    number++;
    if (confirm(`¿El número es ${number}?`) ){
        findNumber = false;
        alert(`Fantastico, tu número es el ${number}`);
    } else if(number > 10){
        findNumber = false;
        alert(`Humano, ya vete, no sabes jugar`);
    }

} */

/* 
let number = 1;
while ( !confirm(`¿El número es ${number}?`) ){//Doble negacion
    number++;
    if (number > 10) {
        alert(`Humano, ya vete, no sabes jugar`);
        break;
    }
}
alert(`Fantastico, tu número es el ${number}`); */


//########################### Ciclo DoWhile ##########################################
//Prtimero hacemos la accion y luego preguntamos
console.log("#### Ciclo While ####");

/**
 * Sintaxis  do-while
 *         do {
 *      }while (condición);
 *      
 *     
 */

let bandera = false;

while (bandera) {
    console.log("Mensaje dentro del ciclo while");
}

//----------------------------
let contador = 0;
do {
    console.log("Mensaje dentro del do-while");
 
} while (++contador<10); //¿Cuantas veces se imprime? R=10

contador = 3;
while (contador++<10) {
    console.log("Valor de contador: " +contador);
}
console.log("Valor final de contador: " + contador); 
//¿Cuantas veces se imprime en consola y cual es el valor final de contador con postincremento? 7 y 11
//¿Con preincremento?: 6 y 10

