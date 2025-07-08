// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotesPage } from './features/Notes'

function App() {
  return (
    <Router>
      <div className="px-4 py-6">
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
