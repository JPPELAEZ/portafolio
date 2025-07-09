// importar el componente link para poder navegar entre paginas 

import { Link } from "react-router-dom";

// hacemos la funcion exportable

export default function SharedDashboardPage(){
    //dentro del retur hacemos el html enyectable 
    return(
        <div className="container text-center">
      <h1>🧩 Herramientas Compartidas</h1>
      <p className="mb-4 text-gray-600">Gestiona tareas compartidas con tu familia o equipo.</p>

      <div className="grid grid-2">
        <Link to="/shared/shopping" className="card">
          <h2>🛒 Lista de Compras</h2>
          <p>Agrega, marca y elimina ítems para las compras.</p>
        </Link>
        <Link to="/shared/tasks" className="card">
          <h2>🏠 Tareas del Hogar</h2>
          <p>Define quién cocina, limpia o debe hacer algo hoy.</p>
        </Link>
      </div>
    </div>
    )    
}