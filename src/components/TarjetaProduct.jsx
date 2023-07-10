function TarjetaProduct ({ productData }) {
  console.log(productData)
  const { title, image, description, price } = productData || {}
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="product-img rounded-t-lg h-[250px] w-full" src={image} alt="" />
      </a>
      <div className="p-5">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-10 truncate">
            { description }
          </p>
          <div className="flex">
              <span className="text-gray-900 dark:text-white font-bold text-4xl">${price}</span>
        </div>
      </div>
    </div>
  )
}

export default TarjetaProduct
