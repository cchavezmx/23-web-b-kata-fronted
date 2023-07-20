import { useGlobalContext } from '../context/ContextGlobal'

function CartPage () {
  const { state } = useGlobalContext()
  console.log(state)

  return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className='text-5xl'>Carrito</h1>
        <h3>PROXIMAMENTE</h3>
        {
          state.products.length > 0 && state.products.map(producto => {
            return (
              <span key={producto.id}>
                { producto.title}
              </span>
            )
          })
        }
      </div>
  )
}

export default CartPage
