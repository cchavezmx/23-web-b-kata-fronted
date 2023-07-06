import './App.css'
import useSWR from './hooks/useSWR'

// variable de entorno
const API_URL = import.meta.env.VITE_API_URL

function App () {
  // leer datos, llamar datos
  const { data: productData, loading, error } = useSWR({ url: `${API_URL}/products/2` })

  return (
    <>
      <h1>Hola</h1>
        {
          !loading && (
        <div>
              <h1>
          { productData.title }
              </h1>
              <p>
                { productData.price }
              </p>
              {
                productData.image &&
                <img className='product-img' src={productData.image} alt={productData.title} />
              }
        </div>
          )
        }
        {
          !loading && error && (
            <h1>Error fatal, consulta más tarde</h1>
          )
        }
    </>
  )
}

export default App
