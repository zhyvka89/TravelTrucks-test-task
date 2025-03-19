import { lazy, Suspense } from 'react'
import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

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
    primary: '#e44848',
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
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
