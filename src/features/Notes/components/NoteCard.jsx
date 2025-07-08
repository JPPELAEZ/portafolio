// src/features/Notes/components/NoteCard.jsx

function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <span>{note.category}</span>
      <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  )
}

export default NoteCard
