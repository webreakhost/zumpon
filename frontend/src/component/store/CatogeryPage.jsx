import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKENDURL } from "../../config/config";
import ProductList from "./ProductList";
// import ProductList from "./Productlist";
import Categorynav from "../category/Categorynav";
import CategoryBanner from "../home/CategoryBanner";
import Categorybanner from "../category/Categorybanner";
import Shopcategory from "../category/Shopcategory";

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BACKENDURL}/api/v1/product/products/${encodeURIComponent(categoryName)}`);
        const data = await response.json();

        if (data.success) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
      setLoading(false);
    };

    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <>
    <Categorynav/>
    <div class="page-content">
                <div class="container">
                  <Categorybanner/>
                  <Shopcategory/>
                  
     <h2>Products in {categoryName}</h2>
<ProductList products={products} loading={loading} />
                </div>
        </div>         
     <div className="category-page">

</div>
    </>
   
  );
};

export default CategoryPage;










