import { FaShoppingCart } from "react-icons/fa";
// context
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
function Product({ product }) {
  const { dispatch, cart } = useContext(GlobalContext);
  const itemInCard = cart.find((item) => item.id == product.id);
  return (
    <div className="card">
      <img
        className="card__image"
        src={product.thumbnail}
        width={50}
        alt="product name"
      />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">Price:{product.price} </small>
      </div>
      {!itemInCard && (
        <button
          onClick={() =>
            dispatch({
              type: "Add_to_cart",
              payload: { ...product, amount: 1 },
            })
          }
          className="btn card__btn"
        >
          <FaShoppingCart /> Add
        </button>
      )}
      {itemInCard && (
        <div className="card-action-btn">
          <button
            onClick={() =>
              dispatch({ type: "INCREASE", payload: itemInCard.id })
            }
            className="btn card__btn__amount"
          >
            &#43;
          </button>
          <span className="amount">{itemInCard.amount}</span>

          <button
            onClick={() => {
              if (itemInCard.amount === 1) {
                return dispatch({ type: "delete", payload: itemInCard.id });
              } else {
                dispatch({ type: "DECREASE", payload: itemInCard.id });
              }
            }}
            className="btn card__btn__amount"
          >
            &#8722;
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
