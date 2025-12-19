import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = 120;
  const shipping = 80;
  const total = subtotal + delivery + shipping;

  return (
    <div className="cart-container">

      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-grid">

        {/* LEFT SIDE — CART ITEMS */}
        <div className="cart-left">

          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Action</span>
          </div>

          {cartItems.map((i) => (
            <div className="cart-row" key={i.id}>
              <div className="product-box">
                <img src={i.image} alt={i.name} className="cart-img" />
                <h3 className="cart-name">{i.name}</h3>
              </div>

              <p className="cart-price">Rs. {i.price}</p>

              <div className="qty">
                <button onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                <span>{i.qty}</span>
                <button onClick={() => dispatch(increaseQty(i.id))}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(i.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — TOTAL BOX */}
        <div className="cart-right">
          <h3 className="totals-title">Cart Totals</h3>

          <div className="totals-row">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>

          <div className="totals-row">
            <span>Delivery Charge</span>
            <span>Rs. {delivery}</span>
          </div>

          <div className="totals-row">
            <span>Shipping</span>
            <span>Rs. {shipping}</span>
          </div>

          <hr />

          <div className="totals-row total-bold">
            <span>Total</span>
            <span>Rs. {total}</span>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn-full">
              Proceed to Checkout
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
