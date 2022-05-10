import searchIcon from "../../assets/search.svg";


import { HeaderContainer } from "./styles";
import { SearchField } from "./styles";
import { ButtonDarkMode } from "./styles";

export function Header({ handleSearchNote, darkMode }) {
  return (
    <HeaderContainer>
      <SearchField>
        <img className="logo" src={searchIcon} alt="Logo de busca" />
        <input
          type="search"
          onChange={(event) => handleSearchNote(event.target.value)}
          placeholder="Buscar Notas"
        />
      </SearchField>
      <ButtonDarkMode onClick={darkMode}>
        <div className="btn-mode"></div>
      </ButtonDarkMode>
    </HeaderContainer>
  );
}
