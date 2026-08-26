interface Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void; //metodo de notificacion
}

//creamos la clase soporte, esta actuaria como observador
class Soporte implements Observador {
    notificar(nombreEquipo: string, nuevoEstado: string): void { //el metodo notificary sus propiedades
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}.`);
    }
}

//en la clase equipo debemos poder agregar observadores y notificarlos cuando el estado cambie
class Equipo {
    nombre: string;
    tipo: string;
    estado: string;
    observadores: Observador[] = [];

    constructor(nombre: string, tipo: string, estado: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    //metodo agregar observador
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    //metodo para cambiar estado
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.observadores.forEach(observador => { //con forEach lo q hacemos es recorrer el array y ejcutar el metodo notificar para avisar a cada obervador sobre el nombre y el nuevo estado
            observador.notificar(this.nombre, this.estado);
        });
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.