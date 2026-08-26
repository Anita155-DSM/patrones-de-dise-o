abstract class TipoEquipo {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre
    }
    abstract detalles(): string; //no tiene codigo, cada clase hijo lo completa, esta obligado a usarlo
}

class NotebookEquipo extends TipoEquipo { //tuve que cambiar el nombred e mi clase porque choca con la variable que tiene el profe
    ram: string; //TENGIO QUE CAMBIAR EL TIPO DE RAM A STRING PORQ EN EL BLOQUE DE CODIGO QUE PASO EL PROFE TIENE "16GB" y lo que dice el profe tiene q ser :)
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string){
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
    ram: string;
    procesador: string;
    
    constructor(nombre: string, ram: string, procesador: string){
        super(nombre)
        //this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`
    }
}

class Servidor extends TipoEquipo{
    //nombre: string;
    ram: string;
    procesador: string;

    constructor(nombre: string, ram: string, procesador: string){
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

    crearEquipo(tipo: "Notebook" | "Desktop" | "Servidor", nombre: string, ram: string, procesador: string){
        //tiene que retornar una instancia de la clase adecuada; notebook, desktop o servidor, usamos swith segun el tipo de caso se retorna uno en especifico
        switch(tipo){
            case "Notebook":
                return new NotebookEquipo(nombre, ram, procesador) 
            case "Desktop":
                return new Desktop(nombre, ram, procesador)
            case "Servidor":
                return new Servidor(nombre, ram, procesador)
        }
    }
}

const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7