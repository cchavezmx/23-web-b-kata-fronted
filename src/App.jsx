import './App.css'
// vistas
import DashboardHOC from './Dahsboard'
import Layout from './components/Layout'
import ProductDetail from './components/ProductDetail'

// SPA
// Rutas //
// Rutas privadas y publicas
// Context
// Testing
// HOC ***
function App () {
  return (
    <>
    <div className="w-screen h-auto max-w-full">
      <Layout />
      <DashboardHOC />
      <ProductDetail />
    </div>
    </>
  )
}

export default App
