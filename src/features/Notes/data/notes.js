// ✅ Este archivo contiene una lista de objetos que representan notas
// ✅ Cada nota tiene un id, un título, contenido y categoría

const notes = [
  {
    id: '1',  // 🔑 Identificador único de la nota (sirve para filtrarla o encontrarla)
    title: 'Aprender React Router', // 🏷️ Título visible de la nota
    content: 'Estudiar rutas anidadas, dinámicas y protección con roles.', // 📄 Cuerpo del texto o descripción
    category: 'Frontend',  // 🧩 Categoría que sirve para clasificar y filtrar
  },
  {
    id: '2',
    title: 'useState vs useReducer',
    content: 'Manejo avanzado de estados en React.',
    category: 'React',
  },
  {
    id: '3',
    title: 'Consumo de APIs',
    content: 'Cómo usar fetch, axios y manejar errores.',
    category: 'Integración',
  },
  {
    id: '4',
    title: 'Zustand',
    content: 'Gestor de estados más simple que Redux.',
    category: 'React',
  },
]

// 📤 Exportamos este array como "notes" para poder usarlo en otros archivos
export default notes
