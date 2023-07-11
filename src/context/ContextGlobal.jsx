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
  const [productos, setProducts] = useState([])
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
