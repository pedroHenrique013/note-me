import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        //Cores Primárias
        --primary-rose: #FDBAA3;
        --primary-white: #FFFFFF;
        --primary-midnight: #3C3D43;
        --primary-cream-white: #FFFDFA;

        //Cores Semanticas
        --semantic-red: #F7685C;
        --semantic-green: #30C58D;

        //Cores das notas
        --note-light-yellow: RGBA(251, 235, 149, 0.4);
        --note-red-orange: RGBA(253, 186, 163, 0.4);
        --note-lilac: RGBA(182, 165, 203, 0.4) ;
        --note-green-cyan: RGBA(151, 210, 188, 0.6);
        --note-light-cyan: RGBA(174, 223, 232, 0.6);

        //Cores cinzas
        --gray-900: #000000;
        --gray-800: #343539;
        --gray-600: #4D4D4D;
        --gray-400: #808080;
        --gray-300: #8C8A97;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: #343539;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-content-modal {
        width: 100%;
        max-width: 576px;
        background: #343539;
        
        padding: 1.5rem 3rem;
        position: relative;
        border-radius: 0.25rem;

    }

    .react-modal-close {
        position: absolute;
        top: 1.8rem;
        right: 1.5rem;
        border: 0;
        background: transparent;

        &:hover {
            filter: brightness(0.9);
        }

    }
    
`;
