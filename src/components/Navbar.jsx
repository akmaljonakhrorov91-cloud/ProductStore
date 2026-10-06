import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
//
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function Navbar() {
  const { totalAmount } = useContext(GlobalContext);
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
            <span className="header__card__indicator">{totalAmount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
