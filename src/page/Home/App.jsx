import { useState } from 'react'
import {AppContent} from './styles'
import { GlobalStyle} from '../../styles/global'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/SideBar'
import { Main } from '../../components/Main'

function App() {
const [notes, setNotes] = useState([
  {
    id: 1,
    content: 'Note 1',
  }
]);

function handleAddNote() {
  const newNote = {id: notes.length + 1, content: 'New Note'};
  setNotes([...notes, newNote]);

}

function handleDeleteNote(deleteNote) {
  console.log(notes)
  console.log(deleteNote);
  const filterNote = notes.filter(note => note.id !== deleteNote);
  setNotes(filterNote);
}

  return (
    <AppContent>
      <Header />
      <Sidebar addNotes={handleAddNote} />
      <Main notes={notes} removeNotes={handleDeleteNote} />
      <GlobalStyle />
    </AppContent>
  )
}

export default App
