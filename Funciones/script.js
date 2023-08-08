/** 
 * Crear dos funciones tipo flecha en javascript.
Condiciones: 
Una de ellas debe manipular arreglos (debe hacer pop() o push()).
La segunda debe tomar dos parámetros de entrada y no usar return para regresar el resultado.
Crear una tercera función tipo flecha que sea un callback function.

Mostrar el resultado de la callback function, usando las dos funciones anteriores.
 */

// Función 1: Manipulación de arreglos diferente
const modifyArray = (arr, action) => {
    if (action === "remove") {
      arr.pop();
    } else if (action === "add") {
      arr.push("New Item");
    }
  };
  
  // Función 2: Sin retorno directo pero con diferente lógica
  const printValues = (value1, value2) => {
    console.log(`Valor 1: ${value1}`);
    console.log(`Valor 2: ${value2}`);
  };
    // Función 3: Callback function con otro enfoque
    const executeCallback = (paramA, paramB, callback) => {
        console.log("Ejecutando la función de callback:");
        callback(paramA, paramB);
      };
      

  // Arreglo inicial diferente
  let myDifferentArray = [10, 20, 30, 40, 50];
  
  // Modificando el arreglo usando la función 1
  modifyArray(myDifferentArray, "remove");
  console.log("Arreglo después de remover:", myDifferentArray);
  
  // Agregando elementos al arreglo usando la función 1
  modifyArray(myDifferentArray, "add");
  console.log("Arreglo después de agregar:", myDifferentArray);
  
  // Llamando a la función de callback (función 3) y usando la función 2
  executeCallback("Hola", "Amigo", printValues);



  