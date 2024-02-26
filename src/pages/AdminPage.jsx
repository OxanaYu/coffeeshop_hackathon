import React, { useState } from "react";
import AddProducts from "../components/product/AddProducts";
import AddCategory from "../components/product/AddCategory";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          height: "50px",
          paddingTop: "30px",
          background: "#2c1a18",
        }}
      >
        <button
          style={{
            background: "#2c1a18",
            border: "none",
            color: "#9d8781",
          }}
          onClick={handleOpen}
        >
          Add Category
        </button>
      </div>

      <AddCategory open={open} handleClose={handleClose} />
      <AddProducts />
    </div>
  );
};

export default AdminPage;
