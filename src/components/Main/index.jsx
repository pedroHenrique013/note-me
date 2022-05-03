import { Greeting } from "../Greeting";
import { NoteCard } from "../NoteCard";
import { MainContent } from "./styles";

export function Main({ notes, removeNotes, searchText}) {
  return (
    <MainContent>
      <Greeting />
      <NoteCard
        notes={notes.filter((note) => note.content?.toLowerCase().includes(searchText.toLowerCase()))}
        removeNotes={removeNotes}
      />
    </MainContent>
  );
}
