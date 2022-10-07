import { Banda  } from "./bandas.js";

class BandaEmo extends Banda {
    #nivelTristeza;
    constructor(nombre, nParticiapantes, pais, nivelTristeza){
        //Super llama al constructor de la clase padre "Banda"
        super(nombre, nParticiapantes, pais);
        this.#nivelTristeza = nivelTristeza;
    }
    imprimir(){
        return `${super.imprimir()} con nivel de tristeza de ${this.#nivelTristeza}`
    }
}



export {BandaEmo};
