import { useState, useEffect } from "react";
import "./SidebarFilters.css";

export default function SidebarFilters({
  category,
  minPrice,
  maxPrice,
  onApply,
}) {
  const [localCategory, setLocalCategory] = useState(category || "");
  const [price, setPrice] = useState([
    Number(minPrice) || 0,
    Number(maxPrice) || 50000,
  ]);

  useEffect(() => {
    setLocalCategory(category || "");
    setPrice([
      Number(minPrice) || 0,
      Number(maxPrice) || 50000,
    ]);
  }, [category, minPrice, maxPrice]);

  const applyFilters = () => {
    onApply({
      category: localCategory,
      minPrice: price[0],
      maxPrice: price[1],
    });
  };

  return (
    <div className="sidebar">
      <div className="filter-group">
        <h3 className="filter-title">Categories</h3>
        <select
          value={localCategory}
          onChange={(e) => setLocalCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Price Range</h3>

        <input
          type="range"
          min="0"
          max="50000"
          value={price[0]}
          onChange={(e) =>
            setPrice([Number(e.target.value), price[1]])
          }
        />

        <input
          type="range"
          min="0"
          max="50000"
          value={price[1]}
          onChange={(e) =>
            setPrice([price[0], Number(e.target.value)])
          }
        />

        <p className="price-label">
          ${price[0]} - ${price[1]}
        </p>
      </div>

      <button className="apply-btn" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
}
