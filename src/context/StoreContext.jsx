/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useReducer
} from 'react'

const initialStore = {
  productos: []
}

// CREAR EL CONTEXTO
const context = createContext()
const Provider = context.Provider
const StoreContextProvider = ({ children }) => {
  // add reducers
  const reducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {
      return {
        ...state,
        productos: [...state.productos, action.payload]
      }
    }

    if (action.type === 'REMOVE_PRODUCT') {
      return {
        ...state,
        productos: state.productos.filter((producto) => producto.id !== action.payload.id)
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialStore)

  const addProduct = (product) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product
    })
  }

  const removeProduct = (product) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product
    })
  }

  const couterProducts = state.productos.length

  return (
      <Provider value={{
        state,
        addProduct,
        couterProducts,
        removeProduct
      }}>
          { children }
      </Provider>
  )
}

function useStoreContext () {
  return useContext(context)
}

export {
  StoreContextProvider as default,
  useStoreContext
}
