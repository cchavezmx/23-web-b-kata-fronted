import './App.css'
// vistas
import DashboardHOC from './Dahsboard'
import Layout from './components/Layout'
import ProductDetail from './components/ProductDetail'
import { useGlobalContext } from './context/ContextGlobal'

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
      <h3>PROXIMAMENTE</h3>
    </div>
  )
}

function App () {
  const {
    handledChangeView,
    dashboard,
    carrtio,
    productDetail
  } = useGlobalContext()

  return (
    <>
    <div className="w-screen h-auto max-w-full">
      <Layout />
      <div>
        <ul className='flex'>
          <li onClick={() => handledChangeView('dashboard')} role="button" className='px-5 py-4 text-2xl hover:bg-purple-400'>Inicio</li>
          <li onClick={() => handledChangeView('carrito')} role="button" className='px-5 py-4 text-2xl hover:bg-purple-400'>Carrito</li>
          <li onClick={() => handledChangeView('productDetail')} role="button" className='px-5 py-4 text-2xl hover:bg-purple-400'>Producto</li>
        </ul>
      </div>
      {
        dashboard && <DashboardHOC />
      }
      {
        carrtio && <Carrito />
      }
      {
        productDetail && <ProductDetail />
      }
    </div>
    </>
  )
}

export default App
