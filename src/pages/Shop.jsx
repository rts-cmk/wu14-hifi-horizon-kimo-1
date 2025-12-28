import { useLoaderData, Link, useSearchParams } from "react-router"
import { useState } from "react"


export default function Shop() {
  const products = useLoaderData()

  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get("category")



  // dropdown state
  const [brandOpen, setBrandOpen] = useState(true)
  const [colorOpen, setColorOpen] = useState(true)
  const [priceOpen, setPriceOpen] = useState(false)


  // filter state
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)


  // filtering
  const filteredProducts = products.filter(product => {
    const categoryOk = categoryFromUrl
      ? product.category === categoryFromUrl
      : true

    const brandOk = selectedBrand ? product.brand === selectedBrand : true
    const colorOk = selectedColor ? product.color === selectedColor : true
    const priceOk = selectedPrice
      ? selectedPrice === "low"
        ? product.price < 1000
        : product.price >= 1000
      : true

    return categoryOk && brandOk && colorOk && priceOk
  })






  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
  }


  return (
    <div className="shop">
      <h1>PRODUCTS</h1>

      <div className="shop-main">

        {/* SIDEBAR */}
        <aside className="shop-main__sidebar">
          <h2>Sort by</h2>

          {/* BRAND */}
          <div className="filter-box">
            <div
              className="filter-box__header"
              onClick={() => setBrandOpen(!brandOpen)}
            >
              <span>Brand</span>
              <img
                className="filter-box__arrow"
                src={brandOpen ? "/images/icons/arrow-up.svg" : "/images/icons/arrow-down.svg"}
              />
            </div>

            <ul className={`filter-box__list ${brandOpen ? "open" : ""}`}>
              {["Steelseries", "Logitech", "Apple"].map(brand => (
                <li
                  key={brand}
                  className={selectedBrand === brand ? "selected" : ""}
                  onClick={() =>
                    setSelectedBrand(selectedBrand === brand ? null : brand)
                  }
                >
                  <span>{brand}</span>
                  <span className={`filter-circle ${selectedBrand === brand ? "checked" : ""}`}></span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLOR */}
          <div className="filter-box">
            <div className="filter-box__header"
              onClick={() => setColorOpen(!colorOpen)}
            >
              <span>Color</span>
              <img className="filter-box__arrow"
                src={colorOpen ? "/images/icons/arrow-up.svg" : "/images/icons/arrow-down.svg"}
              />
            </div>

            <ul className={`filter-box__list ${colorOpen ? "open" : ""}`}>
              {["Black", "Grey", "White"].map(color => (
                <li
                  key={color}
                  className={selectedColor === color ? "selected" : ""}
                  onClick={() =>
                    setSelectedColor(selectedColor === color ? null : color)
                  }
                >
                  <span>{color}</span>
                  <span className={`filter-circle ${selectedColor === color ? "checked" : ""}`}></span>
                </li>
              ))}
            </ul>
          </div>



          {/* PRICE */}
          <div className="filter-box">
            <div
              className="filter-box__header"
              onClick={() => setPriceOpen(!priceOpen)}
            >
              <span>Price</span>
              <img
                className="filter-box__arrow"
                src={priceOpen ? "/images/icons/arrow-up.svg" : "/images/icons/arrow-down.svg"}
              />
            </div>

            <ul className={`filter-box__list ${priceOpen ? "open" : ""}`}>
              <li
                className={selectedPrice === "low" ? "selected" : ""}
                onClick={() =>
                  setSelectedPrice(selectedPrice === "low" ? null : "low")
                }
              >
                <span>Under £1000</span>
                <span className={`filter-circle ${selectedPrice === "low" ? "checked" : ""}`}></span>
              </li>

              <li
                className={selectedPrice === "high" ? "selected" : ""}
                onClick={() =>
                  setSelectedPrice(selectedPrice === "high" ? null : "high")
                }
              >
                <span>Over £1000</span>
                <span className={`filter-circle ${selectedPrice === "high" ? "checked" : ""}`}></span>
              </li>
            </ul>
          </div>

        </aside>

        {/* PRODUCTS */}
        <div className="shop-main__grid">
          {filteredProducts.map(product => (

            <div className="shop-main__card" key={product.id}>
              <span className="compare">
                Compare
                <img src="/images/icons/compare.svg" />
              </span>

              <Link to={`/productDetails/${product.id}`}
                key={product.id} className="shop-main__Link"

              >
                <img className="shop-main__cardImg" src={product.image} />
                <h3>{product.name}</h3>
                <span>(Digital Output)</span>
                <p>£ {product.price}</p>
              </Link>

              <div className="card-bottom">
                <button onClick={() => addToCart(product)}>
                  Add to cart
                </button>


                {/* Stock Status */}
                <div className={`stock-status stock-status--${product.stock}`}>
                  <span className="stock-status__text">
                    {product.stock === "in" && "In stock"}
                    {product.stock === "few" && "Few in stock"}
                    {product.stock === "out" && "Out of stock"}
                  </span>
                  <span className="stock-status__dot"></span>
                </div>

              </div>

            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

