import { useGlobalContext } from '../../context/ContextGlobal'
import { useParams } from 'react-router-dom'
import SWR from '../../hooks/useSWR'
import ProductDetailView from './ProductDetailView'

function ProductDetail () {
  const { addProduct, removeProduct } = useGlobalContext()

  const params = useParams()

  const { data: productData } = SWR({
    url: `https://fakestoreapi.com/products/${params.id}`
  })

  return <ProductDetailView
    data={productData}
    addProduct={addProduct}
    removeProduct={removeProduct}
  />
}

export default ProductDetail
