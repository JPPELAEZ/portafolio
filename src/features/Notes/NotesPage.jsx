// src/features/Notes/NotesPage.jsx

import { useEffect, useState } from 'react'
import NoteCard from './components/NoteCard'
import { v4 as uuidv4 } from 'uuid'
import './notes.css'

function NotesPage() {
  const [notes, setNotes] = useState(() => {
    const stored = localStorage.getItem('notes')
    return stored ? JSON.parse(stored) : []
  })

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [newNote, setNewNote] = useState({ title: '', content: '', category: '' })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const categories = ['all', ...new Set(notes.map(note => note.category))]

  const filteredNotes = notes.filter(note => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || note.category === category
    return matchesSearch && matchesCategory
  })

  const handleAddNote = () => {
    if (!newNote.title || !newNote.content) return
    const note = { id: uuidv4(), ...newNote }
    setNotes([note, ...notes])
    setNewNote({ title: '', content: '', category: '' })
  }

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id))
  }

  return (
    <div className="notes-container">
  <div className="notes-form">
    <input
      type="text"
      placeholder="Título"
      value={newNote.title}
      onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
    />
    <input
      type="text"
      placeholder="Contenido"
      value={newNote.content}
      onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
    />
    <input
      type="text"
      placeholder="Categoría"
      value={newNote.category}
      onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
    />
    <button onClick={handleAddNote}>Agregar Nota</button>
  </div>

  <div className="note-grid">
    {filteredNotes.length > 0 ? (
      filteredNotes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
      ))
    ) : (
      <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#888' }}>
        No se encontraron notas.
      </p>
    )}
  </div>
</div>

  )
}

export default NotesPage
