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
        color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.text};

    button {
        width: 18px;
        margin-left: auto;
        background: transparent;
        border: none;
        
        
        &:hover {
            filter: brightness(0.7);
        }
    }

    .btn-delete {
        width: 20px;
        height: 22px;
        background-image: url(${({ theme }) => theme.deletenote});
        background-size: cover;

    }

`;