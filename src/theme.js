import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { Colors } from '../styles/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.bouquet,
    },
    secondary: {
      main: '#7eaf80',
    },
    error: {
      main: red.A200,
    },
  },
})

export default theme
