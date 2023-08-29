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

// Arreglo inicial diferente
let myDifferentArray = [10, 20, 30, 40, 50];

// Modificando el arreglo usando la función 1
modifyArray(myDifferentArray, "remove");
console.log("Arreglo después de remover:", myDifferentArray);

// Agregando elementos al arreglo usando la función 1
modifyArray(myDifferentArray, "add");
console.log("Arreglo después de agregar:", myDifferentArray);


printValues("Hola", "Amigo");
