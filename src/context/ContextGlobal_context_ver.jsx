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
  // use es costos
  const [productos, setProducts] = useState([])
  // acciones de la tienda
  // Añadir productos al carrito
  // Borrar productos del carrito
  // Borrar todo el carrito
  //
  // compra => STRIPE // MERCADO PAGO // PAYPAL
  const addProduct = (producto) => {
    // push a un arreglo dentro de un useState
    setProducts((prev) => [...prev, producto])
  }

  return (
    <Provider value={{
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
