////////////// Context ///////////////////////////////////////////
import { AppProvider } from './context'

////////////// Material UI ///////////////////////////////////////////
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'

////////////// Reac Router Dom ///////////////////////////////////////////
import { HashRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'

////////////// Pages ///////////////////////////////////////////
import OnePage from './routes/OnePage';
import SuccessPage from './routes/SuccessPage';





function App () {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path='/' element={< OnePage />} />
            <Route path='/success' element={< SuccessPage />} />
            <Route path="*" element={<OnePage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </AppProvider>
  )
}


export default App
