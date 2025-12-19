import "./Navbar.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // ENTER search → navigate
  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/products?search=${query}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="nav-logo">SKR</div>

        {/* LINKS */}
        <div className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Products</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* CART BUTTON */}
          <button className="icon-btn" onClick={() => navigate("/cart")}>
            <FiShoppingCart />
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
