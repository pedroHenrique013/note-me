import trashImg from "../../assets/trash.svg";
import { NoteListContent, NotesItem, FooterNote } from "./styles";

export function NoteCard() {
  return (
    <NoteListContent>
      <NotesItem>
        <textarea
            placeholder="Insira sua nota aqui" 
        />
        <FooterNote>
          <span>04/04/22</span>
          <button>
            <img src={trashImg} alt="Icone de uma lixeira" />
          </button>
        </FooterNote>
      </NotesItem>
    </NoteListContent>
  );
}
