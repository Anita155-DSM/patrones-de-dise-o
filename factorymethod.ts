abstract class TipoEquipo {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre
    }
    abstract detalles(): string;
}

class Notebook extends TipoEquipo {
    ram: number;
    procesador: string;

    constructor(nombre: string, ram: number, procesador: string){
        // this.nombre = nombre;
        super(nombre)
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop extends TipoEquipo {
    ram: number;
    procesador: string;
    
    constructor(nombre: string, ram: number, procesador: string){
        super(nombre)
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class Servidor extends TipoEquipo{
    //nombre: string;
    ram: number;
    procesador: string;

    constructor(nombre: string, ram: number, procesador: string){
        super(nombre)
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }

}

class EquipoFactory {

    constructor(){
    }

    crearEquipo(){
        //tiene que retornar una instancia de la clase adecuada; notebook, desktop o servidor
    }
}

const factory = new EquipoFactory();
//const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
//console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7