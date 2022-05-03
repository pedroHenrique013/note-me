import styled from "styled-components";

export const SideBarContainer = styled.aside`
    width: 112px;
    height: auto;
    grid-row-start: 1;
    grid-row-end: 3;
    
    background: ${({ theme }) => theme.body};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    position: fixed;

`;

export const SideBarContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .img-logo {
        background-image: url(${({ theme }) => theme.logo});
        margin: 29px 0 200px 0;
        width: 48px;
        height: 48px;
        
    }

    .add-note {
        background-image: url(${({ theme }) => theme.addnote});
        background-size: cover;
        width: 48px;
        height: 48px;
    }

    button {
        background: transparent;
        border: none;

        &:hover {
            filter: brightness(0.8);
        }

        img {
            width: 3px;
            height: 2px;

        }
    }

    img:nth-child(3) {
        margin-bottom: 16px;
        width: 32px;
        height: 32px;
    }
`;