class ObjetoInterior {
    constructor(contenido) {
        this.contenido = contenido;
    }

    mostrarContenido = () => {
        console.log("Contenido interior:", this.contenido);
    };
}

class Marca {
    constructor(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }

    agregarProducto = (producto) => {
        this.productos.push(producto);
    };

    mostrarProductos = () => {
        console.log(`Productos de la marca ${this.nombre}:`);
        this.productos.forEach((producto, index) => {
            console.log(`Producto ${index + 1}:`);
            producto.mostrarDetalles();
            console.log("-------------------------");
        });
    };
}

class Ropa extends Marca {
    constructor(nombre, talla) {
        super(nombre);
        this.talla = talla;
    }

    mostrarDetalles = () => {
        console.log(`Talla: ${this.talla}`);
    };
}

// Crear objetos interiores
const interior1 = new ObjetoInterior("Algodón");
const interior2 = new ObjetoInterior("Poliéster");

// Crear marcas y productos
const adidas = new Marca("Adidas");
const nike = new Marca("Nike");

const pantalon = new Ropa("Pantalón vaquero", "M");
const camiseta = new Ropa("Camiseta estampada", "S");

// Asignar objetos interiores a productos
pantalon.objetoInterior = interior1;
camiseta.objetoInterior = interior2;

// Agregar productos a las marcas
adidas.agregarProducto(pantalon);
nike.agregarProducto(camiseta);

// Mostrar detalles de los productos de las marcas
adidas.mostrarProductos();
console.log("=========================");
nike.mostrarProductos();
