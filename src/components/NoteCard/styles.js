import styled from "styled-components";

export const NoteListContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 286px);
`;

export const NotesItem = styled.form`
    width: 264px;
    height: 240px;
    margin-top: 63px;
    padding: 26px 26px 52px 26px;

    background: var(--note-lilac);
    color: var(--primary-white);
    border-radius: 10px;

    

    textarea {
        width: 100%;
        height: 100%;
        background: transparent;
        color: var(--primary-white);
        padding: 32px 26px 52 26px;
        font-size: 1.3rem;
        font-weight: 500;
        border: none;
        resize: none;
        overflow: hidden;
        outline: none;
        
    }

    textarea::placeholder {
        color: var(--gray-300);
        font-size: 1.1rem;
    }

    small {
        font-size: 0.7rem;
    }

`;

export const FooterNote = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
    

    .button-save {
        width: 30%;
        padding: 0.3rem 0;
        margin-left: auto;
        background: var(--semantic-green);
        border: none;
        border-radius: 5px;
    }

    button {
        width: 18px;
        margin-left: auto;
        background: transparent;
        border: none;
        
        
        &:hover {
            filter: brightness(0.7);
        }
    }

    img {
        width: 18px;
        height: 18px;
        
    }
`;