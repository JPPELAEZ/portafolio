// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotesPage } from './features/Notes'
import DashboardPage from "./features/Dashboard/DashboardPage"
import SharedDashboardPage from "./features/Shared/SharedDashboardPage"


function App() {
  return (
    <Router>
      <div className="px-4 py-6">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/shared" element={<SharedDashboardPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
