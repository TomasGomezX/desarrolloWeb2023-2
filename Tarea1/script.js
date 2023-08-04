// Declaración de variables usando const y let
const precioProducto = 50;
let cantidadComprada = 3;
let totalAPagar = 0;

// Ejemplo de condicionales y bucles en JavaScript

// If, else if, else
if (cantidadComprada <= 0) {
  console.log("Debes comprar al menos un producto.");
} else if (cantidadComprada === 1) {
  totalAPagar = precioProducto;
  console.log("El total a pagar es: $" + totalAPagar);
} else {
  totalAPagar = precioProducto * cantidadComprada;
  console.log("El total a pagar por " + cantidadComprada + " productos es: $" + totalAPagar);
}

// Switch
const metodoPago = "tarjeta";
switch (metodoPago) {
  case "efectivo":
    console.log("Has elegido pagar en efectivo.");
    break;
  case "tarjeta":
    console.log("Has elegido pagar con tarjeta.");
    break;
  default:
    console.log("Método de pago no reconocido.");
}

// For
const limiteIteraciones = 5;
for (let i = 1; i <= limiteIteraciones; i++) {
  console.log("Iteración número: " + i);
}

// Do-While
let numAleatorio;
do {
  numAleatorio = Math.random();
  console.log("Número aleatorio generado: " + numAleatorio);
} while (numAleatorio < 0.5);

// While
let contador = 0;
while (contador < 5) {
  if (contador === 0) {
    console.log("El contador es cero");
  } else if (contador % 2 === 0) {
    console.log(contador + " es par");
  } else {
    console.log(contador + " es impar");
  }
  contador++;
}
