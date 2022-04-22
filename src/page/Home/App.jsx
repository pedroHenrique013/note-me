import {AppContent} from './styles'
import { GlobalStyle} from '../../styles/global'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/SideBar'

function App() {

  return (
    <AppContent>
      <Header />
      <Sidebar />
      <GlobalStyle />
    </AppContent>
  )
}

export default App
