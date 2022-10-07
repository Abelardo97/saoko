console.log("JS07 asincronia");

console.log("01- Primera instrucción");

//SetTimeout( funcion Callback , tiempo_para ejecutar(ms) );
//setTimeout( ()=> console.log("01.5 Holi Crayoli")  , 3000 );
const temporizador = (retardo, msj) => {
  setTimeout(() => console.log(msj), retardo);
};

const intervalo = (tiempo, msj) => {
  setInterval(() => console.log(msj), tiempo);
};
//Ejemplos de sincronia
//temporizador(5000, "02- Segunda instrucción");
//intervalo( 2000, "Holi Crayoli" );
console.log("03- Tercera instrucción");

//***************************************************** */
// API Fetch.

console.log("01- Antes de la solicitud fetch");

//fetch("https://reqres.in/api/users?page=2")


function solicitudFetch(userToFind) {
    /**
     * Fetch: nos sirve para realizar solicitudes http
     * Sintaxis: fetch(url, { config adicional})
     *  .then(function CallBack)
     * 
     * 
     * function de CallBack (parametro){
     * 
     * }
     */

    //Metodo asincrono

//fetch("https://reqres.in/api/users?page=2")

    fetch("https://reqres.in/api/users?delay=3")
        .then((response) => response.json())
        .then((conversion) => {
        //console.log(conversion);
        //Buscando a Michael
        //console.log(conversion.data[0].first_name);
        //console.log(conversion.data[0].email);
        /* let { email, first_name } = conversion.data[0];
        console.log(first_name, email);
        console.log(conversion.data);
        */
        let encontrado = conversion.data.find(
            (data) => data.first_name === userToFind
        );
        console.log(encontrado);
        let objUser = document.getElementById("user-name");
        let objEmail = document.getElementById("user-email");
        objUser.value= encontrado.first_name;
        objEmail.value= encontrado.email;
        usarLocalStorage();
        return "hola";
        })
        .then (msj => console.log("Retorno del then anterior: " + msj) )
        .catch ( err => { 
            //Procesando el error
            console.log(err)});

}

function leerUsuario(usuario){
    console.log("Usuario a buscar:" + usuario);
    const user =  JSON.parse(  localStorage.getItem("user")  );   //leyendo el local storage
    if( user &&  user.time >  Date.now()  ){ //tiempo de vida, caducidad de los datos
        leerLocalStorage();
    }
    else{
        solicitudFetch(usuario);
    }   
}
//funcion local storage
       //Sintaxis para el localStorage
/**
        * localStorage.setItem('Clave, valor')
        */


function usarLocalStorage(){
    let objUser = document.getElementById("user-name");
    let objEmail = document.getElementById("user-email");
    // localStorage.setItem('clave', valor )
    //creacion de objeto guardando user
    let user = {
        name: objUser.value,
        email: objEmail.value,
        time: Date.now()+60000  // leer el tiempo actual y sumarle 1 minuto.
    }
    localStorage.setItem("name", objUser.value);
    localStorage.setItem("email", objEmail.value);
    //Para convertir un objeto a JSON: JSON.stringify( Obj )
    localStorage.setItem("user",  JSON.stringify( user) );
}

function leerLocalStorage(){
      //referencia a los inputs
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");

    //Convertir de JSON a objeto:  JSON.parse( texto  );
    const user =  JSON.parse(  localStorage.getItem("user")  );    
    console.log(user);
    console.log(typeof user);
    objUser.value= user.name;
    objEmail.value= user.email;
}

//Creacion de una promesa
function miPromesa (){
    let promesa = new Promise( (resolve, reject) => {
        const expresion = false; //Cualquier operación

        if(expresion) resolve ("La promesa fue exitosa"); //Puedo delver cualquier tipo de dato
        else reject ("La promesa no se resolvió"); 
    });
    promesa
        .then( response => console.log(response) )
        .catch(error => console.log(error))
        .finally(console.log("Se terminó de ejecutar la promesa"));

}
//miPromesa();

let division = (a,b) => {
    return new Promise((resolve, reject) =>{
        if(b!== 0) resolve(a/b);
        else reject("No se puede realizar una división entre 0");
    });
}    

/*
    division (4,0)//Consumiendo promesa
        .then(resultado => console.log("El resultado es: " + resultado) )
        .catch(error => console.log("Error en la division: " + error));

        division (4,2)
        .then(resultado => console.log("El resultado es: " + resultado) )
        .catch(error => console.log("Error en la division: " + error));    
division();
*/

//Async , await.
async function operaciones() {
    
    //Los bloques try y catch nos sirven para el manejo de errores
    try {
        const result1 = await division(4,0);
        console.log("El resultado de la division es: " + result1);
    } 
    catch (error) {
        console.log("No se pudo realizar la división: " + error);
    }
    
    try{
        const result2 = await division(4,2);
        console.log("El resultado de la division es: " + result2);
    }
    catch (error) {
    console.log("No se pudo realizar la división: " + error);
}


}

operaciones();