



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKENDURL } from "../../config/config";
import { toast } from "react-toastify";
import ProductList from "../store/ProductList";
// import ProductList from "../store/ProductList";
// import ProductList from "../store/Productlist";


const SearchResultsPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query"); // Get query from URL
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]);

  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKENDURL}/api/v1/product/search/${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.success && data.products.length > 0) {
        setSearchResults(data.products);
      } else {
        setSearchResults([]);
        toast.info("No products found.");
      }
    } catch (error) {
      toast.error("Error fetching search results.");
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-results-page">
      <h2 className="text-center mb-4">Search Results for: "{searchQuery}"</h2>
      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : searchResults.length > 0 ? (
        <ProductList products={searchResults} categoryName="Search Results" loading={loading} />
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
