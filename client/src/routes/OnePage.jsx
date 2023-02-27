//////////  MUI ///////////////////////////////////////////////
import { Container } from '@mui/material'

//////////  Components ///////////////////////////////////////////////
import { DrawerAppBar } from '../components/NavBar/DraweAppBar'
import { HomePage } from '../components/Home'
import { ItineraryPage } from '../components/Itinerary'
import { BookNowPage } from '../components/BookNow'
import { PrivateTourPage } from '../components/PrivateTour'
import { FrequentlyAskedQuestions } from '../components/FAQ'
import { ContactPage } from '../components/Contact/Index'
import { FooterPage } from '../components/Footer'

const OnePage = () => {

  return (
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
  )
}

export { OnePage }
