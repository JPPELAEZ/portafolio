
// importar el componente link para poder navegar entre paginas 
import { Link } from 'react-router-dom'
import './global.css'

// lista de modulos del portafolio 
// src/features/Dashboard/DashboardPage.jsx
const modules = [
  {
    title: '📝 Módulo de Notas',
    description: 'Crea y gestiona tus notas personales con buscador y categorías.',
    path: '/notes',
  },
  {
    title: '🧩 Herramientas Compartidas',
    description: 'Tareas del hogar, lista de compras y más (requiere login).',
    path: '/shared',
  },
]

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Perfil / encabezado */}
      <div className="mb-10 text-center">
        <img
          src="https://avatars.githubusercontent.com/u/12345678?v=4"
          alt="Foto de perfil"
          className="w-24 h-24 mx-auto rounded-full border"
        />
        <h1 className="text-3xl font-bold mt-4">Juan Pablo Peláez Camacho</h1>
        <p className="text-gray-600 mt-2">
          Desarrollador full-stack enfocado en React, Node.js y productividad digital.
        </p>
        <a
          href="https://github.com/JPPELAEZ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mt-2 inline-block"
        >
          🔗 Visitar mi GitHub →
        </a>
      </div>

      {/* Tarjetas de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link
            key={mod.path}
            to={mod.path}
            className="bg-white shadow-md rounded-xl p-6 hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{mod.title}</h2>
            <p className="text-gray-600">{mod.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
