import { AppProvider } from './context'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/theme'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import { OnePage } from './routes/OnePage'
import { Success } from './routes/Success'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< OnePage />} />
                <Route path='/success' element={< Success />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
