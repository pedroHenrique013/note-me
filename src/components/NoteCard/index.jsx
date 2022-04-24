import trashImg from "../../assets/trash.svg";
import { NoteListContent, NotesItem, FooterNote } from "./styles";

export function NoteCard({notes, removeNotes}) {
  return (
    <NoteListContent>
      {notes.map(note => (
        <NotesItem key={note.id}>
        <textarea
            placeholder="Insira sua nota aqui" 
        />
        <FooterNote>
          <span>{new Date().toLocaleDateString("pt-BR")}</span>
          <button onClick={() => removeNotes(note.id)}>
            <img src={trashImg} alt="Icone de uma lixeira" />
          </button>
        </FooterNote>
        </NotesItem>
      ))}
    </NoteListContent>
  );
}
