import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import SidebarFilters from "../components/SidebarFilters";
import "./ProductsPage.css";
import { useSearchParams } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    getProducts({
      search,
      category,
      minPrice,
      maxPrice,
    }).then(setProducts);
  }, [search, category, minPrice, maxPrice]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({
        search: searchInput,
        category,
        minPrice,
        maxPrice,
      });
    }
  };

  return (
    <div className="products-page">
      <div className="products-wrapper">
        
        {/* SIDEBAR */}
        <SidebarFilters
          category={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onApply={(filters) =>
            setSearchParams({
              search,
              ...filters,
            })
          }
        />

        {/* MAIN CONTENT */}
        <div className="products-box">
          <div className="top-bar">
            <h2>Products</h2>

            <input
              className="page-search"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          <p className="results-text">
            Showing {products.length} products
          </p>

          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
