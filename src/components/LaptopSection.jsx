import "./LaptopSection.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function LaptopSection({ products }) {
  const navigate = useNavigate();

  // Filter only laptop products
  const laptops = products.filter((item) =>
    item.category?.toLowerCase().includes("laptop")
  );

  const topFour = laptops.slice(0, 4);

  return (
    <section className="laptop-section">
      <div className="laptop-container">

        <div className="laptop-header">
          <h2>Featured Laptops</h2>

          <button className="primary-btn" onClick={() => navigate("/products")}>
            View All <FiArrowUpRight />
          </button>
        </div>

        <div className="laptop-grid">
          {topFour.length === 0 ? (
            <p>No laptop products available.</p>
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
