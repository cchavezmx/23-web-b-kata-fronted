import { useStoreContext } from '../../context/StoreContext'

function CardButton () {
  const { couterProducts } = useStoreContext()

  return (
    <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <a href='/carrito'>
        <img src="/images/icon-cart.svg" alt="cart" className="w-8 h-8 mx-5 text-gray-200" />
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-600">
          { couterProducts }
        </div>
      </a>
    </button>
  )
}

export default CardButton
