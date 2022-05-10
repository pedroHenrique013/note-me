import logoLightImg from '../../src/assets/logo-light.svg';
import logoDarkImg from '../../src/assets/logo-dark.svg';
import plusImg from '../../src/assets/plus.svg';
import moonImg from '../../src/assets/moon.svg';
import sunImg from '../../src/assets/sun.svg';
import trashDarkImg from '../../src/assets/trash-dark.svg';
import plusLight from '../../src/assets/plus-light.svg';
import trashLight from '../../src/assets/trash.svg';

export const lightTheme = {
    body: "#FFFDFA",
    text: "#3C3D43",
    toggleBorder: "#fff",
    logo: logoLightImg,
    addnote: plusImg,
    temamode:moonImg,
    deletenote:trashDarkImg,
  };
  
  export const darkTheme = {
    body: "#343539",
    text: "#fff",
    logo: logoDarkImg,
    addnote:plusLight,
    temamode:sunImg,
    deletenote:trashLight
    
  };