import trashImg from "../../assets/trash.svg";
import { NoteListContent, NotesItem, FooterNote } from "./styles";
import { useState } from "react";

export function NoteCard({ notes, removeNotes }) {
  const [value, setValue] = useState({});

  const handleInputChange = (e, id) => {
    setValue({ ...value, [id]: e.target.value });

    let note = notes.find((n) => n.id === id);
    if (note && note.id) {
      note.content = value[id];
    }
  };

  return (
    <NoteListContent>
      {notes.map((note) => (
        <NotesItem key={note.id}>
          <textarea
            type="text"
            name="content"
            value={value[note.id]}
            placeholder="Insira sua nota aqui"
            onChange={(e) => handleInputChange(e, note.id)}
          />

          <FooterNote>
            <span>{new Date().toLocaleDateString("pt-BR")}</span>
            <button onClick={() => removeNotes(note.id)}>
              <div className="btn-delete"></div>
            </button>
          </FooterNote>
        </NotesItem>
      ))}
    </NoteListContent>
  );
}
