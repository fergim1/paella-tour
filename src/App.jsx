import { AppProvider } from './context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import { OnePage } from './routes/OnePage'
import { lazy, Suspense } from 'react';
const Success = lazy( () => import('./routes/Success.jsx') )

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <HashRouter>´
              <Routes>
                  <Route path='/' element={< OnePage />} />
                    <Route path='/success' element={< Success />} />
              </Routes>
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </AppProvider>
  )
}


export default App
