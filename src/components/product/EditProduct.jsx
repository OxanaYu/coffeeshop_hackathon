import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import "./product.scss";
const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct, categories, getCategories } =
    useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = (e) => {
    editProduct(id, product);
    e.preventDefault();
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getOneProduct(id);
  }, [id]);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <form className="add_container">
      <h2>EDIT PRODUCT</h2>
      <input
        value={product.title}
        onChange={handleInput}
        name="title"
        type="text"
        placeholder="Title"
      />
      <input
        value={product.description}
        onChange={handleInput}
        name="description"
        type="text"
        placeholder="Description"
      />
      <select
        value={product.category}
        name="category"
        id="categorySelect"
        onChange={handleInput}
      >
        {categories.length > 0 &&
          categories.map((category) => (
            <option key={category.id} value={category.value}>
              {category.name}
            </option>
          ))}
      </select>
      <input
        value={product.price}
        onChange={handleInput}
        name="price"
        type="number"
        placeholder="Price"
      />
      <input
        value={product.img}
        onChange={handleInput}
        name="img"
        type="url"
        placeholder="Image"
      />
      <button onClick={handleClick}>SAVE CHANGES</button>
    </form>
  );
};

export default EditProduct;
