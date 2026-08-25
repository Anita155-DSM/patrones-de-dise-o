interface EquipoFac {
    nombre: string,
    ram: number,
    procesador: string
}

class Notebook implements EquipoFac {


    constructor(nombre: string, ram: number, procesador: string){

    }

}

class Desktop implements EquipoFac {

}

class Servidor implements EquipoFac {

}

class EquipoFactory {

    constructor(){
    }

    crearEquipo(){
    
    }
}