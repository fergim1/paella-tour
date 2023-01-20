import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/styles'
import { Home } from './components/Home'
import './App.css'
import { DrawerAppBar } from './components/NavBar/DraweAppBar'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />
      <Home />
    </ThemeProvider>
  )
}

export default App
