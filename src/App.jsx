import { AppProvider } from './context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Home } from './components/Home'
import { DrawerAppBar } from './components/NavBar/DraweAppBar'
import { Container } from '@mui/material'

import './App.css'



function App() {


  return (
    <AppProvider>
        <ThemeProvider theme={theme}>
            <Container maxWidth='xl'>
                <DrawerAppBar />
                <Home />
            </Container>
        </ThemeProvider>
    </AppProvider>
  )
}

export default App
