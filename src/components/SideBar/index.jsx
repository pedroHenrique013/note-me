import logoImg from '../../assets/logo.png';
import addImg from '../../assets/reanking.svg';
import {SideBarContainer, SideBarContent} from './styles';

export function Sidebar() {
  return (
    <SideBarContainer>
      <SideBarContent>
        <img src={logoImg} alt="Logo de um lapís escrevendo" />
        <button>
          <img src={addImg} alt="Icone de criaçao de notas" />
        </button>
      </SideBarContent>
    </SideBarContainer>
  );
}
