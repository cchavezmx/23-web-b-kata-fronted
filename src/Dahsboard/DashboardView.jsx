import TarjetaProduct from '../components/TarjetaProduct'
// hacer testing
// todo lo que sea jsx ❌ hooks, logica de JS map

function DashboardView ({ data = [] }) {
  return (
    <>
      {
        data.length > 0 && (
          data.map(product => <TarjetaProduct key={product.id} productData={product} />)
        )
      }
    </>
  )
}

export default DashboardView
