class AdminInventario {
  private static instancia: AdminInventario;
  private inventario: { [producto: string]: number } = {};

  private constructor() {}

  public static obtenerInstancia(): AdminInventario {
    if (!AdminInventario.instancia) {
      AdminInventario.instancia = new AdminInventario();
    }
    return AdminInventario.instancia;
  }

  public agregarProducto(producto: string, stock: number): void { //con void le decimos que modifica (pushe en este caso) pero n
    this.inventario[producto] = stock;
  }

  public listarProductos(): { [producto: string]: number } {
    return this.inventario;
  }
}

const admin1 = AdminInventario.obtenerInstancia();
const admin2 = AdminInventario.obtenerInstancia();

admin1.agregarProducto("Camiseta", 50);
admin2.agregarProducto("Pantalón", 30);

console.log(admin1 === admin2);
console.log(admin1.listarProductos());

interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

// class Inventario {
//   private static instancia: Inventario;
//   private equipos: Equipo[] = [];

//   private constructor() {}

//   public static obtenerInstancia(): Inventario {
//     if (!Inventario.instancia) {
//       Inventario.instancia = new Inventario();
//     }
//     return Inventario.instancia;
//   }

//   public agregarEquipo(nombre: string, tipo: string, estado: string): void {
//     this.equipos.push({ nombre, tipo, estado });
//   }

//   public listarEquipos(): Equipo[] {
//     return this.equipos;
//   }
// }

// const inv1 = Inventario.obtenerInstancia();
// const inv2 = Inventario.obtenerInstancia();

// inv1.agregarEquipo("Notebook HP", "Portátil", "disponible");
// inv2.agregarEquipo("PC Escritorio", "Desktop", "disponible");

// console.log(inv1 === inv2);
// console.log(inv1.listarEquipos());