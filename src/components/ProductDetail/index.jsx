import { useGlobalContext } from '../../context/ContextGlobal'
import { useParams, useLocation } from 'react-router-dom'
import SWR from '../../hooks/useSWR'

import ProductDetailView from './ProductDetailView'

function ProductDetail () {
  const { addProduct } = useGlobalContext()
  const params = useParams()
  const location = useLocation()
  // params son parametros de RUTAS
  // estado y el path name
  console.log({ params, location })

  const { data: productData } = SWR({
    url: `https://fakestoreapi.com/products/${params.id}`
  })

  return <ProductDetailView data={productData} addProduct={addProduct} />
}

export default ProductDetail
