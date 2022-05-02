import trashImg from "../../assets/trash.svg";
import { NoteListContent, NotesItem, FooterNote } from "./styles";
import { useState } from 'react';

export function NoteCard({ notes, removeNotes}) {
  const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleSaveClick = (e) => {
		e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    notes.forEach(note => {
      if(note.content === '') {
        note.content = data.content;
      }
    })
    setValue(data.content);
    
    console.log(notes);
  
	};

  return (
    <NoteListContent>
      {notes.map((note) => (
        <NotesItem onSubmit={handleSaveClick} key={note.id}>
          <textarea type="text" name="content" value={value} placeholder="Insira sua nota aqui" onChange={handleInputChange} />
          
          <FooterNote>
            <span>{new Date().toLocaleDateString("pt-BR")}</span>
            <button className="button-save" type="submit">salvar</button>
            <button onClick={() => removeNotes(note.id)}>
              <img src={trashImg} alt="Icone de uma lixeira" />
            </button>
          </FooterNote>
        </NotesItem>
      ))}
    </NoteListContent>
  );
}
