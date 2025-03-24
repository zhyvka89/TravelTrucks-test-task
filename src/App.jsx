import { lazy, Suspense } from 'react'
import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import CircularProgress from '@mui/material/CircularProgress';

const Header = lazy(() => import('./components/Header/Header'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1440,
    },
  },
  palette: {
    primary: {
      main: "#E44848", // Main red
      dark: "#D84343", // Darker red
      light: "#FFC531", // Accent yellow
    },
    secondary: {
      main: "#475467", // Dark gray-blue
    },
    text: {
      primary: "#101828", // Dark text
      secondary: "#6C717B", // Lighter gray
    },
    background: {
      default: "#F2F4F7", // Main background
      inputs: "#F7F7F7",
      paper: "#FFFFFF", // Card background
    },
    divider: "#DADDE1", // Border lines
    action: {
      hover: "#F7F7F7", // Hover background
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f7f7f7',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          paddingLeft: 64,
          paddingRight: 64
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '16px 40px',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#D84343'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#f7f7f7',
          borderRadius: '12px',
          height: '56px'
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          display: 'flex',
          flexDirection: 'column',
          width: '112px',
          border:'1px solid #DADDE1',
          borderRadius: '12px',
          padding: '16px 18px',
          "&.Mui-selected": {
            border:'1px solid #E44848',
            backgroundColor: 'transparent',
            color: '#101828'
          },
          "&:hover": {
            border:'1px solid #E44848'
          }
        },
  
      }
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.5,
    button: {textTransform: 'none'}
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />

      <Suspense fallback={<CircularProgress color='primary'/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
    </>
  )
}

export default App
