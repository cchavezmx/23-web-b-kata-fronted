import { useState } from 'react'
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

const Carrito = () => {
  return (
    <div>
      <h1 className='text-5xl'>Carrito</h1>
    </div>
  )
}

function App () {
  const [dashboard, setDashboard] = useState(true)
  const [productDetail, setProductDetail] = useState(false)
  const [cart, setCart] = useState(false)

  const handledChangeView = (view) => {
    switch (view) {
      case 'dashboard':
        setDashboard(true)
        setProductDetail(false)
        setCart(false)
        break
      case 'productDetail':
        setDashboard(false)
        setProductDetail(true)
        setCart(false)
        break
      case 'cart':
        setDashboard(false)
        setProductDetail(false)
        setCart(true)
        break
      default:
        break
    }
  }

  return (
    <>
    <div className="w-screen h-auto max-w-full">
      <Layout handledChangeView={handledChangeView} />
        <button className='px-5 py-4 text-2xl hover:bg-purple-400' onClick={() => handledChangeView('dashboard')}>Inicio</button>
        <button className='px-5 py-4 text-2xl hover:bg-purple-400' onClick={() => handledChangeView('productDetail')}>Productos</button>
        <button className='px-5 py-4 text-2xl hover:bg-purple-400' onClick={() => handledChangeView('cart')}>Carrito</button>
      {
        dashboard && <DashboardHOC />
      }
      {
        productDetail && <ProductDetail />
      }
      {
        cart && <Carrito />
      }
    </div>
    </>
  )
}

export default App
