import React from "react";
import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const { addProductToCoffeeCart, deleteProductInCoffeeCart } = useCoffeeCart();
  const navigate = useNavigate();
  const handleClick = () => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
  };
  const handleAddToCart = () => {
    addProductToCoffeeCart(elem);
    alert("Confirm action: Product is in cart ");
  };
  return (
    <form className="form_card">
      <div className="card_content">
        <div>
          <img src={elem.img} alt="" />
          <p>{elem.title}</p>
          <p>{elem.description}</p>
          <p>{elem.category}</p>
          <p>{elem.price}$</p>
        </div>
        <div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: "-40%",
          }}
        >
          <NavLink to={"/comments"}>
            <img
              style={{
                width: "13%",
                height: "13%",
                cursor: "pointer",
              }}
              src="https://svgsilh.com/svg/29435-ff9800.svg"
              alt=""
            />
          </NavLink>
          <img
            style={{
              width: "15%",
              height: "15%",
              cursor: "pointer",
            }}
            src="https://svgsilh.com/svg/2438744-ff9800.svg"
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
