import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  note: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#E3A5C7',
          dark: '#B76D9B'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#694F8E',
          dark: '#4B3C6E'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--mui-palette-primary-light)',
            borderRadius: '4px',
            outline: 'none'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'var(--mui-palette-primary-dark)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '1px',
          '&:hover': { borderWidth: '2px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        }
      }
    }
  }
})
export default theme
