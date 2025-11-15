import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Products } from "../Services/Products";
import ProductCard from "../Services/ProductCard";

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter by category and search
  const filtered = Products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Home page: show only 6 products
  // Services page: show products based on visibleCount
  const finalProducts = isHome ? filtered.slice(0, 6) : filtered.slice(0, visibleCount);

  // Load more function for services page
  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Navigate to services page from home
  const navigateToServices = () => {
    navigate('/services');
  };

  // Check if there are more products to load (services page only)
  const hasMoreProducts = visibleCount < filtered.length;

  return (
    <div className="px-6 mt-20 mb-4">
      {/* Search + Category Filter - Show on both pages */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-md w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-md"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Stitched</option>
          <option>Unstitched</option>
          <option>Kurtis</option>
          <option>Formal</option>
          <option>Casual</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {finalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No products found message */}
      {finalProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
        </div>
      )}

      {/* Home Page: See More Button (navigates to services) */}
      {isHome && filtered.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={navigateToServices}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            See More
          </button>
        </div>
      )}

      {/* Services Page: Load More Button (loads more products) */}
      {!isHome && hasMoreProducts && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}