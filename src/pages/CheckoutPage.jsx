import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address) return alert("Please fill all fields");

    dispatch(clearCart());
    navigate("/success");
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">

        <h2 className="checkout-title">Checkout</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="primary-btn">
            Place Order
          </button>
        </form>

      </div>
    </div>
  );
};

export default CheckoutPage;
