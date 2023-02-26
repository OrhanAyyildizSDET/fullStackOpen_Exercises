import Note from "./components/note"
import {useState,useEffect} from "react"
import noteServices from "./services/noteServices"

const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
      </div>
    )
  }

const App = ()=>{    
    const [notes,setNotes] = useState([])    
    const [newNote, setNewNote] = useState('a new note...') 
    const [showAll, setShowAll] = useState(true)
    const result = notes.find(note => note.id===1)
    console.log(result,notes.filter(note=>note.id===3))

    useEffect (() => {       
      noteServices.getAll()
      .then(response => {          
          setNotes(notes.concat(response))
      })
      .catch(error=>{
        console.log(error)
      })
    },[])
        
    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id:notes.length+1
        }
    
        noteServices
        .create(noteObject)
        .then(response => {
            setNotes(notes.concat(response))
            setNewNote('Please Enter a New Note...')            
        })        
    }   

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }    

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const toggleImportanceOf = (id) => {
        const note = notes.find(x => x.id === id)
        const changedNote = { ...note, important: !note.important }
      
        noteServices.update(id, changedNote).then(response => {
          setNotes(notes.map(x => x.id !== id ? x : response))
        })
        .catch(error => {
            alert(
              `the note '${note.content}' was already deleted from server`
            )
            console.log(error)
            setNotes(notes.filter(n => n.id !== id))
          })    
    }

    const deleteNote = (id) => {
      noteServices.deleteNote(id).then(response=>{
        setNotes(notes.filter(note => note.id !== id))
      })
    }

    if(notes.length)
      return(
          <>
              <h1>Notes</h1>
              <div >            
                  {notesToShow.map(note => 
                      <Note  key={note.id} note={note} 
                      toggleImportance={() => toggleImportanceOf(note.id)}
                      id = {() => deleteNote(note.id)}
                      />
                  )}               
                  <button onClick={() => setShowAll(!showAll)}>
                      show {showAll ? 'important' : 'all' }
                  </button>
                  <p>----------------------------------------------------</p>
                  <form onSubmit={addNote}>
                      <input value={newNote} onChange={handleNoteChange}/>
                      <button type="submit">save</button>
                  </form>
                  <Footer/>
              </div>
          </>
      )
    else
      return (<p>Loading.....</p>)
}
export default App