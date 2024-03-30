import React, { useState, useEffect, useMemo } from "react";
import "./searchAllProduct.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProductImg from "../../components/productList/ProductImg";
import { allProductList } from "../../components/productList/ProductList";
import { useLocation } from "react-router-dom";
import SingleProductCard from "../../components/singleProductCard/SingleProductCard";
import Pagination from "../../constant/Pagination";

const PageSize = 10;

const SearchAllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProductListState, setAllProductListState] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value.length < 1) {
      setFilteredProductList(allProductList);
      return;
    }

    const filteredData = allProductList.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    if (filteredData.length) {
      setFilteredProductList(filteredData);
      setError("");
    } else {
      setFilteredProductList([]);
      setError("No Products Were Found");
    }
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * PageSize;
    const endIndex = startIndex + PageSize;
    return filteredProductList.slice(startIndex, endIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (searchValue.length === 0) {
      setFilteredProductList(allProductList);
    }
  }, [searchValue]);

  return (
    <div>
      <Navbar />
      {/* ... your WhatsApp link and other components ... */}
      <div className="searchAll_sectionOne_gen">
        {currentPage == 1 && (
          <div className="all_product_searchInput">
            <input
              type="search"
              placeholder="Search here..."
              onChange={(e) => handleSearch(e.target.value)}
              value={searchValue}
            />
          </div>
        )}

        <div className="special_topSellling__">Top Selling Products</div>

        <div className="flex__allProduct">
          {getPaginatedData().map((data, index) => {
            return <SingleProductCard data={data} key={index} />;
          })}
        </div>

        <Pagination
          className="allProductpagination-bar"
          currentPage={currentPage}
          totalCount={filteredProductList.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default SearchAllProduct;
