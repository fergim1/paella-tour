import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Home } from './components/Home'
import './App.css'
import { DrawerAppBar } from './components/NavBar/DraweAppBar'
import { Container } from '@mui/material'

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth='xl'>
            <DrawerAppBar />
            <Home />
        </Container>
    </ThemeProvider>
  )
}

export default App
