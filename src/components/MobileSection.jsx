import "./MobileSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function MobileSection({ products }) {
  const navigate = useNavigate();

  // Filter only mobile products
  const mobilePhones = products.filter((item) =>
    item.category?.toLowerCase().includes("mobile")
  );

  // Limit to 4 items
  const topFour = mobilePhones.slice(0, 4);

  return (
    <section className="mobile-section">
      <div className="mobile-container">

        <div className="mobile-header">
          <h2>Latest Mobile Phones</h2>

          <button className="primary-btn" onClick={() => navigate("/products")}>
            View All <FiArrowUpRight />
          </button>
        </div>

        <div className="mobile-grid">
          {topFour.length === 0 ? (
            <p>No mobile products available.</p>
          ) : (
            topFour.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}
