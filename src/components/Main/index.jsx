import { Greeting } from '../Greeting';
import { NoteCard } from '../NoteCard';
import {MainContent} from './styles';

export function Main() {
    return (
        <MainContent>
            <Greeting />
            <NoteCard />
        </MainContent>
    );
}