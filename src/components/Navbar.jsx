import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
//
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
// react icons
function Navbar() {
  const { totalAmount, cart, dispatch } = useContext(GlobalContext);
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
            <div className="hidden-card">
              {cart.length > 0 ? (
                cart.map((item) => {
                  const { id, title, price, amount, thumbnail } = item;
                  return (
                    <div key={id} className="hidden-card__item">
                      <img
                        src={thumbnail}
                        alt={title}
                        width={50}
                        className="hidden-card__img"
                      />
                      <div className="hidden-card__item-info">
                        <h4 className="hidden-card__title">{title}</h4>
                        <h3 className="hidden-card__price">Price: ${price}</h3>
                        <p className="hidden-card__price">
                          {amount} x {amount * price}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: "delete", payload: id })
                        }
                        className="btn hidden-card__remove-btn"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="hidden__card__info">Cart is empty</p>
              )}
              {cart.length > 0 && (
                <button
                  onClick={() => dispatch({ type: "Clear" })}
                  className="btn hidden-card__clear-btn"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
