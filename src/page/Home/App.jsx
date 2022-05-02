import { useState } from "react";
import { AppContent } from "./styles";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { Main } from "../../components/Main";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Note 1",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  function handleAddNote() {
    const newNote = { id: notes.length + 1,  };
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(deleteNote) {
    console.log(notes);
    console.log(deleteNote);
    const filterNote = notes.filter((note) => note.id !== deleteNote);
    setNotes(filterNote);
  }
  console.log(notes);

  return (
    <AppContent>
      <Header handleSearchNote={setSearchText} />
      <Sidebar addNotes={handleAddNote} />
      <Main
        notes={notes}
        removeNotes={handleDeleteNote}
        searchText={searchText}
      />
      <GlobalStyle />
    </AppContent>
  );
}

export default App;
