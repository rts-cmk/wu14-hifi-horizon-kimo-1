import { useParams, useLoaderData } from "react-router"
import { useState } from "react"

export default function ProductDetails() {
  const { id } = useParams()
  const products = useLoaderData()

  const product = products.find(product => product.id === id)

  if (!product) {
    return <p>Product not found</p>
  }

  // Convert "Black, Grey" → ["Black", "Grey"]
  const availableColors = product.color
    .split(",")
    .map(color => color.trim())

  const [selectedColor, setSelectedColor] = useState(availableColors[0])
  const [quantity, setQuantity] = useState(1)

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }



  return (
    <div>
    <section className="product-details">
      <h1>PRODUCT</h1>

 

      <div className="product-details__content">
             <span className="compare">
        Compare
        <img src="/images/icons/compare.svg" />
      </span>

        <div className="product-details__image">
          <img src={product.image} />
        </div>


        <div className="product-info">
          <h2>{product.name}</h2>

          <p >{product.description}</p>

          {/* COLOR SELECTOR */}
          <div className="product-colors">

            <ul className="product-colors__list">
              {availableColors.map(color => (
                <li key={color}
                  className={`product-colors__item ${selectedColor === color ? "active" : ""
                    }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <span
                    className={`color-dot ${color.toLowerCase()}`}
                  ></span>
                  <span className="color-label">{color}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="product-info__price">£ {product.price}</p>
          <div className="product-info__bottom">
            <div className="product-quantity">
              <button onClick={decreaseQuantity}>−</button>
              <span className="product-quantity__number">
                {quantity}
              </span>

              <button onClick={increaseQuantity}>+</button>
            </div>

            <button className="product-info__button">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
              <hr />

              <section className="product-spec">

                <h2>PRODUCT SPECIFICATIONS</h2>


              </section>

    </div>
    
  )
}
