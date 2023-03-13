//////////  MUI ///////////////////////////////////////////////
import { Container } from '@mui/material'

//////////  Lazy Load ///////////////////////////////////////////////
import { lazy, Suspense } from 'react'

//////////  Components ///////////////////////////////////////////////
const DrawerAppBar = lazy(() => import('../components/NavBar/DraweAppBar'))
const HomePage = lazy(() => import('../components/Home'))
const ItineraryPage = lazy(() => import('../components/Itinerary'))
const BookNowPage = lazy(() => import('../components/BookNow'))
const PrivateTourPage = lazy(() => import('../components/PrivateTour'))
const FrequentlyAskedQuestions = lazy(() => import('../components/FAQ'))
const ContactPage = lazy(() => import('../components/Contact/Index'))
const FooterPage = lazy(() => import('../components/Footer'))
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
                  <HomePage />
                  <ItineraryPage />
                  <BookNowPage />
                  <PrivateTourPage />
                  <FrequentlyAskedQuestions />
                  <ContactPage />
                  <FooterPage />
                  <WhatsappButton />
              </Suspense>

            </Container>
  )
}

export { OnePage }
