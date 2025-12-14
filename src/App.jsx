import { NavLink, Outlet } from "react-router"

export default function App() {
  return (
    <>
      <header>
        <nav>

          <NavLink className="NavLink" to="/">
            <img className="logo" src="/images/logo_sml1.png" alt="" />
          </NavLink>

          {/* SHOP WITH HOVER DROPDOWN */}
          <div className="nav-shop">
            <NavLink className="NavLink" to="/shop">
              SHOP
            </NavLink>

            <div className="nav-shop__dropdown">
              <h4>Browse Categories</h4>
              <ul>
                <li>CD Players</li>
                <li>DVD Players</li>
                <li>Preamps</li>
                <li>Speakers</li>
                <li>Turntables</li>
                <li>Integrated Amplifiers</li>
                <li>Power Amplifiers</li>
                <li>Tube Amplifiers</li>
              </ul>
            </div>
          </div>

          <NavLink className="NavLink" to="/">ABOUT US</NavLink>
          <NavLink className="NavLink" to="/">CONTACT US</NavLink>

        </nav>

        <div className="right-header">
          <div className="right-header__search-box">
            <input type="search" placeholder="Search product..." />
            <img className="search-icon" src="/images/icons/Vector.png" alt="search" />
          </div>

          <div className="right-header__left-icons">
            <img src="/images/icons/profile.png" alt="" />
            <img src="/images/icons/cart.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

<footer>
  <div className="footer_top">
    <div className="footer_col">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/">About Us</NavLink>
    </div>

    <div className="footer_col">
      <a href="#">Returns & Refunds</a>
      <a href="#">Delivery</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
    </div>

    <div className="footer_col contact">
      <p>Contact</p>

      <strong>
        2 Joppa Rd, Edinburgh, EH15 2EU
        <div className="phoneNr">
          <img src="/images/icons/phone.png" />
          0131 556 7901
        </div>

        <br />

        44 Cow Wynd, Falkirk, Central Region, FK1 1PU
        <div className="phoneNr">
          <img src="/images/icons/phone.png" />
          01324 629 011
        </div>
      </strong>

      <div className="socials">
        <img src="/images/icons/facebook.png" alt="" />
        <img src="/images/icons/twiter.png" alt="" />
        <img src="/images/icons/intagram.png" alt="" />
        <img src="public/images/icons/youtube.png" alt="" />
      </div>
    </div>
  </div>

  <hr />

  <div className="footer_bottom">
    <div className="payment">
      <img src="/images/icons/stripe.png" alt="" />
      <img src="/images/icons/visa.png" alt="" />
      <img src="/images/icons/mastercard.png" alt="" />
    </div>

    <div className="footer_bottom__text">
      <p className="legal">
        HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC044928.
        Registered office: 2 Joppa Rd, Edinburgh EH15 2EU
      </p>

      <p className="design">Designed by WU07 :)</p>
    </div>
  </div>
</footer>
    </>
  )
}
