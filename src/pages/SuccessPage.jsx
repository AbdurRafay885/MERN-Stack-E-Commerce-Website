import { Link } from "react-router-dom";
import "./SuccessPage.css";
import partyPopper from "../Images/Party Popper.png";
const SuccessPage = () => {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <img
          src={partyPopper}
          alt="success"
          className="success-icon"
        />

        <h2 className="heading">Order Placed Successfully!</h2>
          <p className="success-message">
          Thank you for your purchase! Your order has been placed successfully.
        </p>

        <Link to="/products">
           <button className="primary-btn">Back to Products</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
