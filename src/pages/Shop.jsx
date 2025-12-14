import { useLoaderData } from "react-router"
import { useState } from "react"

export default function Shop() {
  const products = useLoaderData()

  // dropdown state
  const [brandOpen, setBrandOpen] = useState(false)
  const [colorOpen, setColorOpen] = useState(false)

  // filter state
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  // filtering
  const filteredProducts = products.filter(product => {
    const brandOk = selectedBrand ? product.brand === selectedBrand : true
    const colorOk = selectedColor ? product.color === selectedColor : true
    return brandOk && colorOk
  })

  return (
    <div className="shop">
      <h2>Products</h2>

      <div className="shop-main">

        {/* SIDEBAR */}
        <aside className="shop-main__sidebar">

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
                alt="Toggle Dropdown"
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
            <div
              className="filter-box__header"
              onClick={() => setColorOpen(!colorOpen)}
            >
              <span>Color</span>
              <img
                className="filter-box__arrow"
                src={colorOpen ? "/images/icons/arrow-up.svg" : "/images/icons/arrow-down.svg"}
                alt="Toggle Dropdown"
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

        </aside>

        {/* PRODUCTS */}
        <div className="shop-main__grid">
          {filteredProducts.map(product => (
            <div className="shop-main__card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
