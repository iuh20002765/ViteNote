import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#FF5F00'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#FF5F00'
        }
      }
    }
  }
  //...
})
export default theme
