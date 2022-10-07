class Banda {
    //Se definen los atributos

    //parametros de la clase
    #creacion;
    #nombre;
    #nParticipantes;
    #pais;
    constructor(nombre, nParticipantes,pais){
        
        this.#nombre = nombre;
        this.#nParticipantes = nParticipantes;
        this.#pais = pais;
        //Se usa # para encapsular
        this.#creacion = new Date(); //Campo privado

    }
    /**
     * Texto con los datos principales de la banda
     * 
     * @returns mensaje los datos principales 
     */
    imprimir(){
        return `Grupo: ${this.#nombre} de ${this.#nParticipantes} integrantes del país ${this.#pais}`
    }
    //Metodos de accesoa  datos privados
        get creacion (){
            return this.#creacion;
        }
        get nParticipantes (){
            return this.#nParticipantes;
        }
        set nParticipantes(nuevoNumero){
            this.#nParticipantes = nuevoNumero;
        }
}

export {Banda};