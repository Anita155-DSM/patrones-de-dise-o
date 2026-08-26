interface Observador {
    notificacion: string
}

//creamos la clase soporte, esta actuaria como observador
class Soporte  {

}

//en la clase equipo debemos poder agregar observadores y notificarlos cuando el estado cambie
class Equipo implements Observador {
    observadores: Observador[] = [];

    constructor(observadores: string, notificacion: string ){
    }

    //metodo agregar observador
    agregarObservador(){

        return ``
    }
    //metodo para cambair estado
    cambiarEstado(){
    }
}

//const soporte = new Soporte();
//const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
//equipo.agregarObservador(soporte);
//equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.