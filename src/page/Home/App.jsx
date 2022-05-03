import { useEffect, useState } from "react";
import { AppContent } from "./styles";
import { GlobalStyle } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/SideBar";
import { Main } from "../../components/Main";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  function handleAddNote() {
    const newNote = { id: Math.floor(Math.random() * 1000), content: "" };
    setNotes([newNote, ...notes]);

  }

  function handleDeleteNote(deleteNote) {
    const filterNote = notes.filter((note) => note.id !== deleteNote);
    setNotes(filterNote);
  }
  console.log(notes);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppContent>
        <Header handleSearchNote={setSearchText} darkMode={toggleTheme} />
        <Sidebar addNotes={handleAddNote} />
        <Main
          notes={notes}
          removeNotes={handleDeleteNote}
          searchText={searchText}
        />
        <GlobalStyle />
      </AppContent>
    </ThemeProvider>
  );
}

export default App;
