import TarjetaProduct from '../components/TarjetaProduct'
// hacer testing
// todo lo que sea jsx ❌ hooks, logica de JS map

function DashboardView ({ data = [] }) {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-2 pt-4'>
        {
          data.length > 0 && (
            data.map(product =>
            <TarjetaProduct key={product.id} productData={product} />)
          )
        }
      </div>
    </>
  )
}

export default DashboardView
