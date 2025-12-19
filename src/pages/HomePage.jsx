import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Hero from "../components/Hero";
import MobileSection from "../components/MobileSection";
import LaptopSection from "../components/LaptopSection";
const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetching from backend (works even if empty)
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="homepage">
      <Hero />
      <MobileSection products={products} />
      <LaptopSection products={products} />
    </div>
       <div>
          <footer>
             <p>Copyright &copy; 2025 SKR Technologies. All rights reserved.</p>
          </footer>
      </div>
    </>
    
  );
};

export default HomePage;
