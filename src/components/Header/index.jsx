import searchIcon from '../../assets/search.svg';
import sunIcon from '../../assets/sun.svg';

import {HeaderContainer} from './styles';
import {SearchField} from './styles';
import { ButtonDarkMode } from './styles';


export function Header() {
    return (
        <HeaderContainer>
            <SearchField>
                <img src={searchIcon} alt="Logo de busca" />
                <input type="search" placeholder="Buscar Notas" />
            </SearchField>
            <ButtonDarkMode>
                <img src={sunIcon} alt="Icone de botão para escolha do tema claro ou esciro" />
            </ButtonDarkMode>
        </HeaderContainer>
    );
}