// Crea una clase padre y una clase que herede de padre, ambas deben tener minimo 2 metodos, deben recibir objetos y esos objetos recibidos deben tener otro objeto como propiedad y mostrar resultados

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
    }
}

class Ropa extends Producto {
    constructor(nombre, precio, talla) {
        super(nombre, precio);
        this.talla = talla;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Talla: ${this.talla}`);
    }
}

class Marca {
    constructor(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    mostrarProductos() {
        console.log(`Productos de la marca ${this.nombre}:`);
        this.productos.forEach((producto, index) => {
            console.log(`Producto ${index + 1}:`);
            producto.mostrarDetalles();
            console.log("-------------------------");
        });
    }
}

// Crear productos
const pantalon = new Ropa("Pantalón vaquero", 50, "M");
const camiseta = new Ropa("Camiseta estampada", 25, "S");

// Crear marcas
const adidas = new Marca("Adidas");
const nike = new Marca("Nike");

// Agregar productos a las marcas
adidas.agregarProducto(pantalon);
nike.agregarProducto(camiseta);

// Mostrar detalles de los productos de las marcas
adidas.mostrarProductos();
console.log("=========================");
nike.mostrarProductos();
