import { ThemeProvider } from '@mui/material/styles'
import { theme } from './styles/styles'
import { Home } from './components/Home'
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
