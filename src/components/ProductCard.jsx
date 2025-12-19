import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <div className="product-img-box">
        <img src={product.image} alt={product.name} />
      </div>

      <h4 className="product-name">{product.name}</h4>

      <div className="product-bottom-row">
        <div className="product-bottom-row">
          <p className="head"> Price:</p>
          <p className="price"> ${product.price}</p>
        </div>

        <button className="add-cart-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
