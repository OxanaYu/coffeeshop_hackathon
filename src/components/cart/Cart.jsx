import React, { useEffect } from "react";
import { useCoffeeCart } from "../../context/CartContext";
import coffeeIcon from "./img/reserve-cup-img.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    coffeeCart,
    getCoffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCoffeeCart();
  }, []);

  const handleClick = () => {
    navigate("/pay");
  };

  return (
    <form className="form__cart">
      <div className="cart-table">
        {coffeeCart.products.map((elem) => (
          <div className="cart-row" key={elem.item.id}>
            <div className="cart-product">
              <img
                className="cart-product-image"
                src={elem.item.img || coffeeIcon}
                alt=""
              />
              <div
                style={{ margin: "10px", width: "300px" }}
                className="cart-product-info"
              >
                <p className="cart-item-title">{elem.item.title}</p>
                <p className="cart-item-description">{elem.item.description}</p>
                <p className="cart-item-category">{elem.item.category}</p>
              </div>
            </div>
            <div style={{ margin: "10px" }}>${elem.item.price}</div>
            <div style={{ margin: "10px" }}>
              <input
                className="cart-item-input"
                onChange={(e) =>
                  changeProductCountInCoffeeCart(elem.item.id, e.target.value)
                }
                type="number"
                min={1}
                max={20}
                defaultValue={elem.count}
              />
            </div>
            <div style={{ margin: "10px" }}>${elem.subPrice}</div>
            <div style={{ margin: "10px" }}>
              <button
                className="cart-item-delete"
                onClick={() => deleteProductInCoffeeCart(elem.item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginLeft: "85%" }} className="static-items">
        <p className="total-price">Total Price: ${coffeeCart.totalPrice}</p>
        <button className="order-button" onClick={handleClick}>
          Order
        </button>
      </div>
    </form>
  );
};

export default Cart;
