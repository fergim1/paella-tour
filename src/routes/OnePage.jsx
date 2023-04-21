//////////  MUI ///////////////////////////////////////////////
import { Container } from '@mui/material'

//////////  Components ///////////////////////////////////////////////
import { DrawerAppBar } from '../components/NavBar/DraweAppBar'
import { Home } from '../components/Home'
import { Itinerary } from '../components/Itinerary'
import { BookNow } from '../components/BookNow'
import { PrivateTour } from '../components/PrivateTour'
import { FrequentlyAskedQuestions } from '../components/FAQ'
import { Contact } from '../components/Contact/index.jsx'
import { Footer } from '../components/Footer'
import { WhatsappButton } from '../components/Whatsapp'


function OnePage () {

  return (
    <Container maxWidth='false'
      sx={{
        width: '100%',
        height: 'auto',
        margin: { xs: '0px auto' },
        padding: { xs: '0px' },
        boxSizing: 'border-box',
      }}
    >
      <DrawerAppBar />
      <Home />
      <Itinerary />
      <BookNow />
      <PrivateTour />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
      <WhatsappButton />
    </Container>
  )
}

export default OnePage
