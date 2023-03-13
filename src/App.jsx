////////////// Context ///////////////////////////////////////////
import { AppProvider } from './context'

////////////// Material UI ///////////////////////////////////////////
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'

////////////// Reac Router Dom ///////////////////////////////////////////
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'

////////////// Lazy Load ///////////////////////////////////////////
import { lazy, Suspense } from 'react';

////////////// Pages ///////////////////////////////////////////
import { OnePage } from './routes/OnePage'
const SuccessPage = lazy( () => import('./routes/SuccessPage.jsx') )


function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div></div>}>
          <HashRouter>
              <Routes>
                  <Route path='/' element={< OnePage />} />
                  <Route path='/success' element={< SuccessPage />} />
              </Routes>
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </AppProvider>
  )
}


export default App
