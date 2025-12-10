import { useLoaderData } from "react-router";

export default function Home() {
  const products = useLoaderData()
  console.log(products)

  const homeProducts = []
  const categoriesUsed = {}

  // Loop through each product
  products.forEach((product) => {
    // If category not already used
    if (!categoriesUsed[product.category] && homeProducts.length < 4) {
      homeProducts.push(product);
      categoriesUsed[product.category] = true
    }
  })

  return (
    <>
      <section className="sec1">
        <img src="public/images/Skærmbillede 2022-03-10 kl. 10.45 1.png" alt="" />
      </section>

      <section className="sec2">
        <div className="sec2__head">
          <h2>POPULAR PRODUCTS</h2>
          <button>See all products</button>
        </div>

        <div className="sec2__products">
          {homeProducts.map(product => (
            <div className="sec2__product-card" key={product.id}>
              <img src={product.image} />
              <h2>{product.name} <br />(Digital Output) </h2>
              <p>£{product.price}</p>
              <button>Read more</button>
            </div>

          ))}
        </div>

      </section>


      <section className="sec3">

        <div className="sec3_left">
          <h2>What we do</h2>
          <br />
          <p>We look forward to customising a system to meet your needs.
            <br />
            We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences.
            We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.
            If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.
            One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.
          </p>
        </div >

        <div className="sec3_right">
          <h2>Opening hours</h2>
          <br />
          <p><strong>Edinburgh</strong>
          <br />
            2 Joppa Rd,Edinburgh, EH15 2EU
            Monday to Friday: 10:00am - 5:30pm
            Saturday: 10:00am - 5:30pm
            Sunday: Closed

            <strong>Falkirk</strong>
            <br />
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU
            Monday to Friday: 10:00am - 5:30pm
            Saturday - By appointment only
            Sunday: Closed
          </p>
        </div >



      </section>


    </>
  );
}
