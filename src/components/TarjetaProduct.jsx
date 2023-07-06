function TarjetaProduct ({ productData }) {
    const { title, price, image } = productData || {}

    return (
    <>
        <h1>Tarjeta de producto</h1>                      
          <div>
            <h1>{ title }</h1>
                <p>
                  { price }
                </p>
                {
                  image &&
                  <img className='product-img' src={image} alt={title} />
                }
          </div>                   
    </>
    )
}

export default TarjetaProduct
