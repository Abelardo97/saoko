console.log("JS07 Asincronia");
console.log("01- Intrucción");
//SetTimeout(funcion Callback, tiempo_pare jecutar(ms));
//setTimeout(()=> console.log("01.5Holi Crayoli"), 3000);//Funcion Callback
const temporizador = (retardo, msj) =>{ //declarando funcion flecha
    setTimeout( ()=> console.log(msj), retardo);
}

const intervalo = (tiempo,msj) => {
    setInterval( () => console.log(msj), tiempo)
}

//Ejemplos de sincronia

//temporizador(5000, "02- Segunda intrucción");
//intervalo(2000, 'Holi Crayoli');

console.log("03- Tercera intrucción");




//****************************************** */
//API FETCH

console.log("Antes de la solicitud fetch");

function solicitudFetch(userToFind){

//Metodo asincrono

//fetch("https://reqres.in/api/users?page=2")


fetch("https://reqres.in/api/users?delay=3")
    .then( response => response.json())
    .then( conversion => {
        //Buscando a Michael
        /* Forma 1
           //console.log(conversion);
        console.log(conversion.data[0].first_name); 
        console.log(conversion.data[0].email); 
        */
/*
        let {email, first_name} = conversion.data[0];
        console.log(first_name, email);
        console.log(conversion.data);
*/
        let encontrado = conversion.data.find(
            (data) => data.first_name === userToFind //busqueda de la persona
        );
        console.log(encontrado);
        let objUser = document.getElementById("user-name");
        let objEmail = document.getElementById("user-email");
        objUser.value = encontrado.first_name;
        objEmail.value = encontrado.email;
        usarLocalStorage();

    });
}
function leerUsuario(usuario){
    console.log("Usuario a buscar: " + usuario);
    const user = JSON.parse(localStorage.getItem("user") ); //leyendo el local storage
    if(user > Date.now()){ //tiempo de vida, caducidad de los datos
        leerLocalStorage();
    }else{
        
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

    //creacion de objeto guardando user
    let user = {
        name: objUser.value,
        email: objEmail.value,
        time: Date.now() + 60000 //Ler el tiempo actual y sumarle un inuto
    }
    localStorage.setItem("name", objUser.value);
    localStorage.setItem("email", objEmail.value);
    //Para convertir un objeto a JSON:    -> JSON.strngify(objeto)
    localStorage.setItem("user", JSON.stringify(user));
}
function leerLocalStorage(){
    //referencia a los inputs
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");


    //converir de JSON a objeto: JSON.parse(texto);
    const user = JSON.parse(localStorage.getItem("user") ); //leyendo el local storage
    console.log(user);//
    console.log(typeof user);
    objUser.value = user.name;
    objEmail.value = user.email;
}






