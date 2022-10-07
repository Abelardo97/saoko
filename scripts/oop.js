console.log("Sesión JS08 Programación Orientada a Objetos");

const miArreglo = [5,6,9,7];
const miArregloConstructor = new Array(5,6,3,9,7);

console.log(miArreglo);
console.log(miArregloConstructor);

//Propiedades de mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);

//Metodo del arreglo

console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());
//******************************* */

const coraline ={
    region: [4,1,2],
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [//
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "UK"
        },
        {
            nombre:  "Dakota Fanning",
            pais: "USA"
        }
    ],
    director: {
        nombre: "Henry Selik",
        pais: "USA"
    },   
/**
   * Mostrar todos los datos
   */
 mostrarTodaInfo: function(){
    console.log("==*==*==*==*==*==*==*");
    console.log(this.nombre);
    console.log("Duración : " + this.duracion);
    this.genero.forEach( (info) =>{
      console.log(`Genero: ${info}`);
    });
    console.log("Clasificación :" + this.clasificacion);
    console.log('Actores:' );
    this.mostrarActores();
    console.log(`Director: ${this.director.nombre} del pais ${this.director.pais}` );
    console.log("==*==*==*==*==*==*==*");
  }       
        };

//Accediendo al nombre
console.log("Pelicula: " + coraline.nombre);

console.log("Qué tipo es: " + Array.isArray(coraline.actores) );

//iterando el arreglo
coraline.actores.forEach(info => {
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);

} )
//console.log("Actores: " + coraline.actores);

//Mostrando el director:
console.log("Director: "+ coraline.director.nombre)

//Cambiando la clasificación 
coraline.clasificacion = "C";
console.log("Clasificación: " + coraline.clasificacion);

//Agregadno al actor Ian McShane de UK, Daw Frech de UK.
coraline.actores.push({nombre: "Ian McShane", pais: "UK"});
coraline.actores.push({nombre: "Daw Frech", pais: "UK"});


/*
//Iteramos los actores:
console.log("Iteramos los actores");
coraline.actores.forEach(info => {
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);

} )
*/

//coraline.mostrarActores();
coraline.mostrarTodaInfo();