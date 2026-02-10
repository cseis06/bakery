import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home/Home'
import CatalogPage from './pages/catalog/CatalogPage'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App