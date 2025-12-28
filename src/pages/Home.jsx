import { useLoaderData, useNavigate } from "react-router"

export default function Home() {
  const products = useLoaderData()
  const navigate = useNavigate()

  // Select up to 4 popular products, each from a different category
  const homeProducts = []
  const categoriesUsed = {}

  products.forEach((product) => {
    if (!categoriesUsed[product.category] && homeProducts.length < 4) {
      homeProducts.push(product)
      categoriesUsed[product.category] = true
    }
  })

  return (
    <>
      {/* Section 1 */}
      <section className="sec1">
        <img src="/images/Skærmbillede 2022-03-10 kl. 10.45 1.png" />
      </section>

      {/* Section 2 */}
      <section className="sec2">
        <div className="sec2__head">
          <h2>POPULAR PRODUCTS</h2>
          <button>See all products</button>
        </div>

        <div className="sec2__products">
          {homeProducts.map((product) => (
            <div className="sec2__product-card" key={product.id}>
              <img src={product.image}  />
              <h2> {product.name} <br /><span>(Digital Output)</span></h2>
              <p>£ {product.price}</p>
              <button onClick={() => navigate(`/productDetails/${product.id}`)}>
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="sec3">
        <div className="sec3_left">
          <h2>What we do</h2>
          <p>We look forward to customising a system to meet your needs.</p>
          <p>
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p>
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to hundreds
            of brands.
          </p>
          <p>
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </div>

        <div className="sec3_right">
          <h2>Opening hours</h2>

          <strong>Edinburgh</strong>
          <p>
            2 Joppa Rd, Edinburgh, EH15 2EU
            <br />
            Monday to Friday: 10:00am - 5:30pm
            <br />
            Saturday: 10:00am - 5:30pm
            <br />
            Sunday: Closed
          </p>

          <strong>Falkirk</strong>
          <p>
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU
            <br />
            Monday to Friday: 10:00am - 5:30pm
            <br />
            Saturday - By appointment only
            <br />
            Sunday: Closed
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="sec4">
        <div className="sec4__Box">
          <h2>SIGN UP FOR OUR NEWSLETTER</h2>
          <p>
            Subscribing to our newsletter secures you up to date information
            about HiFi Horizons latest updates and offers.
          </p>
          <div className="sec4__form">
            <input type="email" />
            <button>Sign up</button>
          </div>
        </div>
      </section>
    </>
  )
}
