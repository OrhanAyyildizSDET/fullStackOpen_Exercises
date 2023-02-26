const Note = ({ note, toggleImportance, id }) => {
    const label = note.important
      ? 'make not important' : 'make important'
  
    return (
      <li>
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
        <button onClick={id}>delete</button>
      </li>
    )
  }
  
  export default Note