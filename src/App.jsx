import { lazy, Suspense } from 'react'
import './App.module.css'
import { Routes, Route } from 'react-router-dom'

const Header = lazy(() => import('./components/Header/Header'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {

  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
