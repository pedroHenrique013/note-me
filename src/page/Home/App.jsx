import {AppContent} from './styles'
import { GlobalStyle} from '../../styles/global'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/SideBar'
import { Main } from '../../components/Main'

function App() {

  return (
    <AppContent>
      <Header />
      <Sidebar />
      <Main />
      <GlobalStyle />
    </AppContent>
  )
}

export default App
