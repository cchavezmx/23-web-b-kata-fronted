import { useGlobalContext } from '../../context/ContextGlobal'

import ProductDetailView from './ProductDetailView'

function ProductDetail () {
  const { addProduct } = useGlobalContext()

  const data = {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: {
      rate: 4.5,
      count: 146
    }
  }

  return <ProductDetailView data={data} addProduct={addProduct} />
}

export default ProductDetail
