/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState
} from 'react'

// CREAR EL CONTEXTO
const context = createContext()
const Provider = context.Provider
const ContextGlobalProvider = ({ children }) => {
  // vistas
  const [dashboard, setDashbord] = useState(true)
  const [carrtio, setCarrito] = useState(false)
  const [productDetail, setProductDetail] = useState(false)

  const handledChangeView = (view) => {
    switch (view) {
      case 'dashboard':
        setDashbord(true)
        setCarrito(false)
        setProductDetail(false)
        break
      case 'productDetail':
        setDashbord(false)
        setCarrito(false)
        setProductDetail(true)
        break
      case 'carrito':
        setDashbord(false)
        setCarrito(true)
        setProductDetail(false)
        break
      default:
        return null
    }
  }

  const [productos, setProducts] = useState([])
  const addProduct = (producto) => {
    // push a un arreglo dentro de un useState
    setProducts((prev) => [...prev, producto])
  }

  return (
    <Provider value={{
      handledChangeView,
      dashboard,
      carrtio,
      productDetail,
      addProduct,
      productos
    }}>
        { children }
    </Provider>
  )
}

function useGlobalContext () {
  return useContext(context)
}

export {
  ContextGlobalProvider as default,
  useGlobalContext
}
