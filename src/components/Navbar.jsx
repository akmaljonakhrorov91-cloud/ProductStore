import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
          <div className="header__card">
            <FaShoppingCart />
            <span className="header__card__indicator">10</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
