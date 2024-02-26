import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./product.scss";

const AddCategory = (props) => {
  const { open, handleClose } = props;
  const { createCategory } = useProducts();
  const [category, setCategory] = useState();
  const handleClick = () => {
    if (!category) {
      alert("Заполните поле");
      return;
    } else {
      const newCategory = {
        name: category,
      };
      createCategory(newCategory);
      setCategory("");
    }
    handleClose();
  };
  console.log(handleClose);

  return (
    <div>
      {open && (
        <div className="addCategory_modal">
          <div className="inside_container">
            <h2>Add new category</h2>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <div className="addCategory_container">
              <button onClick={handleClick}>ADD </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
