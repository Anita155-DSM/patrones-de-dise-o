interface Equipo { //primero creamos la inteface equipo que lo que hace es definir la estructura de los equipos que van a registrarse
    nombre: string,
    tipo: string,
    estado: "disponible" | "en reparacion" | string  //el tipo de estado de estado que puede tener 
}

class Inventario {
    //static nos dice que pertenece a la clase en si
    private static instancia: Inventario
    private equipos: Equipo[] = [] //aca vamos a guardar todos los equipos agregadps

    //constructor privado para que nadie pueda acceder desde afuera
    private constructor() {
    }

    public static obtenerInstancia(): Inventario { //si tenemos una instancia la creamos
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia; //retorna la instancia
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void { //con void le decimos que modifica (pushe en este caso) pero no reotnra nada
        //aca nada mas agregamos un nuevo equipo
        this.equipos.push({ nombre, tipo, estado }); 
    }

    public listarEquipos(): Equipo[] { //esta función va a devolver una lista de objetos con forma de Equipo 
        //aca listamos los equipos
        return this.equipos;
    }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());