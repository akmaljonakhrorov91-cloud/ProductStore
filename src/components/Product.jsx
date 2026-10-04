import { FaShoppingCart } from "react-icons/fa";

function Product({ product }) {
  const itemInCard = true;
  return (
    <div className="card">
      <img
        className="card__image"
        src={product.images}
        width={100}
        alt="product name"
      />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">Price:{product.price} </small>
      </div>
      {!itemInCard && (
        <button className="btn card__btn">
          <FaShoppingCart /> Add
        </button>
      )}
      {itemInCard && (
        <div className="card-action-btn">
          <button className="btn card__btn__amount">&#43;</button>
          <span className="amount">10</span>
          <button className="btn card__btn__amount">&#8722;</button>
        </div>
      )}
    </div>
  );
}

export default Product;
