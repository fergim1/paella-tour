//////////  MUI ///////////////////////////////////////////////
import { Container } from '@mui/material'

//////////  Lazy Load ///////////////////////////////////////////////
import { lazy, Suspense } from 'react'

//////////  Components ///////////////////////////////////////////////
const DrawerAppBar = lazy(() => import('../components/NavBar/DraweAppBar'))
const Home = lazy(() => import('../components/Home'))
const Itinerary = lazy(() => import('../components/Itinerary'))
const BookNow = lazy(() => import('../components/BookNow'))
const PrivateTour = lazy(() => import('../components/PrivateTour'))
const FrequentlyAskedQuestions = lazy(() => import('../components/FAQ'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))
const WhatsappButton = lazy(() => import('../components/Whatsapp'))



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
              <Suspense fallback={<div></div>}>
                  <DrawerAppBar />
                  <Home />
                  <Itinerary />
                  <BookNow />
                  <PrivateTour />
                  <FrequentlyAskedQuestions />
                  <Contact />
                  <Footer />
                  <WhatsappButton />
              </Suspense>

            </Container>
  )
}

export { OnePage }
