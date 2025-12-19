import "./Hero.css";
import "../App.css";
import { FiArrowUpRight } from "react-icons/fi";
import HSLaptopImage from "../Images/HSLaptopImage.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-skr">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>Upgrade Your Tech. Elevate Your Life</h1>

          <p className="hero-text">
            Upgrade your tech with the latest laptops and smartphones.
          </p>

          <button className="primary-btn" onClick={() => navigate("/products")}>
            Shop Now <FiArrowUpRight />
          </button>
        </div>

        {/* IMAGE */}
        <div className="hero-center">
          <img src={HSLaptopImage} className="hero-product" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <p className="hero-text">
            Discover top-rated devices perfect for work, gaming, and more.
          </p>

          <button className="primary-btn" onClick={() => navigate("/products")}>
            Explore Products <FiArrowUpRight />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;
