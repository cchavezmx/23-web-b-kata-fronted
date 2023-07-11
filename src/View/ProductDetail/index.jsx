import { useStoreContext } from '../../context/StoreContext'
import ProductDetailView from './ProductDetailView'
import { useParams } from 'react-router-dom'
import useSWR from '../../hooks/useSWR'
import { API_URL } from '../../config/CONST'

function ProductDetail () {
  const { addProduct } = useStoreContext()

  const { id } = useParams()
  console.log(id)

  const { data } = useSWR({ url: `${API_URL}/products/${id}` })
  return <ProductDetailView data={data} addProduct={addProduct} />
}

export default ProductDetail
