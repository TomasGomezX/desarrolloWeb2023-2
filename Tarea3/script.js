// Construir un array con mínimo 2 objetos
const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico"
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      genero: "Distopía"
    }
  ];
  
  // Usar 3 métodos de arreglos sobre el array
  // 1. Concat: Unir un nuevo array de libros al array existente
  const nuevosLibros = [
    {
      id: 3,
      titulo: "El nombre del viento",
      autor: "Patrick Rothfuss",
      genero: "Fantasía"
    },
    {
      id: 4,
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      genero: "Novela romántica"
    }
  ];
  const bibliotecaCompleta = libros.concat(nuevosLibros);
  
  // 2. Filter: Encontrar libros por autor
  const librosPorAutor = bibliotecaCompleta.filter(libro => libro.autor === "George Orwell");
  
  // 3. Map: Crear un array de títulos de libros
  const titulosDeLibros = bibliotecaCompleta.map(libro => libro.titulo);
  
  console.log("Biblioteca completa:", bibliotecaCompleta);
  console.log("Libros por autor:", librosPorAutor);
  console.log("Títulos de libros:", titulosDeLibros);
  