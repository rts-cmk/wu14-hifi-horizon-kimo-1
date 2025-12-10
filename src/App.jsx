
import { NavLink, Outlet } from "react-router"

export default function App() {

  return (
    <>

      <header>
        <nav>
          <NavLink className="NavLink" to="/">
            <img className="logo" src="/images/logo_sml1.png" alt="" />
          </NavLink>

          <NavLink className="NavLink" to="/shop">SHOP</NavLink>

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


    </>
  )
}

