import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const ProductList = () => {
  //! SEARCH
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  //! PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 6;
  const count = Math.ceil(products.length / itemPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  };

  const handleChange = (value) => {
    setPage(value);
  };

  return (
    <div>
      {currentData().map((elem) => (
        <ProductCard key={elem.id} elem={elem} />
      ))}

      <Pagination page={page} count={count} handleChange={handleChange} />
    </div>
  );
};

export default ProductList;
