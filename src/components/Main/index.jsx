import { Greeting } from '../Greeting';
import { NoteCard } from '../NoteCard';
import {MainContent} from './styles';

export function Main({notes, removeNotes}) {
    return (
        <MainContent>
            <Greeting />
            <NoteCard notes={notes} removeNotes={removeNotes}/>
        </MainContent>
    );
}