import { useContext } from "react";
import Product from "./Product";
// context
import { GlobalContext } from "../context/GlobalContext";

function ProductList({ products }) {
  const { totalPrice } = useContext(GlobalContext);
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product list: </p>
        <span className="card-container__price">
          Total price: ${totalPrice}
        </span>
        <button className="btn card-container__btn">clear</button>
      </div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
