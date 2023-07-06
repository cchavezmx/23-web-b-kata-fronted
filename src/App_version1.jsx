// este fue como empezamos

import { useEffect, useState } from 'react'
import './App.css'

function App () {
  // leer datos, llamar datos
  const [count, setCount] = useState(1)
  const [productData, setProductData] = useState({
    price: 0,
    title: 'loading producto...',
    image: ''
  })

  const nextProduct = () => {
    setCount(count + 1)
  }

  // Generar experiencia al usuario
  // useMemo, useCallback, useRef, memo

  const getProductos = () => {
    // async await, Promisse =>
    fetch(`https://fakestoreapi.com/products/${count}`, {
      method: 'GET'
    })
      .then(res => {
        console.log({ res })
        if (res.status !== 200) {
          throw new Error('Error fetch')
        }
        return res.json()
      })
      .then(json => {
        console.log(json)
        setProductData(json)
      })
      .catch(err => {
        console.log(err)
        return err
      })
      .finally(() => console.log('Finalmente'))
  }

  useEffect(() => {
    getProductos()
  }, [count])

  return (
    <>
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
      <button onClick={() => nextProduct()}>Cambiar</button>
    </>
  )
}

export default App
