import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  note: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#E3A5C7'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#694F8E'
        }
      }
    }
  }
  //...
})
export default theme
