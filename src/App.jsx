import { AppProvider } from './context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { Container } from '@mui/material'
import { DrawerAppBar } from './components/NavBar/DraweAppBar'
import { HomePage } from './components/Home'
import { ItineraryPage } from './components/Itinerary'
import { BookNowPage } from './components/BookNow'
import { PrivateTourPage } from './components/PrivateTour'
import { FrequentlyAskedQuestions } from './components/FAQ'
import { ContactPage } from './components/Contact/Index'
import { FooterPage } from './components/Footer'




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
                <HomePage />
                <ItineraryPage />
                <BookNowPage />
                <PrivateTourPage />
                <FrequentlyAskedQuestions />
                <ContactPage />
                <FooterPage />
            </Container>
        </ThemeProvider>
    </AppProvider>
  )
}

export default App
