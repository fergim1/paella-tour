import { AppProvider } from './context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Home } from './components/Home'
import { DrawerAppBar } from './components/NavBar/DraweAppBar'
import { Container } from '@mui/material'
import { Contact } from './components/Contact/Index'




function App() {

  return (
    <AppProvider>
        <ThemeProvider theme={theme}>
            <Container maxWidth='false'
                sx={{
                  width: '100%',
                  height: 'auto',
                  margin: {xs: '0px auto'},
                  padding: {xs: '0px'},
                  boxSizing: 'border-box',
                }}
            >
                <DrawerAppBar />
                <Home />
                <Contact />
            </Container>
        </ThemeProvider>
    </AppProvider>
  )
}

export default App
