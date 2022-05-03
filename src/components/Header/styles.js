import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  margin: 2.8rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchField = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    margin-left: 0.5rem; //11px
    padding: 0.3rem; //9px
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 1rem; //16px
    border: none;

    ::-webkit-input-placeholder {
      color: var(--gray-300);
      font-size: 1rem; //16px
    }
  }
`;

export const ButtonDarkMode = styled.button`
  margin-right: 106px;
  background: transparent;
  border: 0;
  

  .btn-mode {
    width: 30px;
    height: 30px;
    background-image: url(${({ theme }) => theme.temamode});
    background-size: cover;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
