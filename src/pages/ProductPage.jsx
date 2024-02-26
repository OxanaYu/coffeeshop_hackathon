import React, { useState } from "react";
import ProductList from "../components/product/ProductList";
import SideBar from "../components/product/SideBar";
import Navbar from "../homepage/Navbar";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "300px", flex: "none" }}>
          <SideBar page={page} setPage={setPage} />
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
