import React, { useEffect } from "react";
import PaymentForm from "./PaymentForm";
import { useCoffeeCart } from "../../context/CartContext";

const CartWithPayment = () => {
  const {
    coffeeCart,
    getCoffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();

  useEffect(() => {
    getCoffeeCart();
  }, []);
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <div style={{ flex: 2, marginRight: "20px" }}>
        <PaymentForm />
      </div>
      <div
        style={{
          flex: 1,
          background: " #d7b0a0",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "7%",
        }}
      >
        {coffeeCart.products.map((elem) => (
          <div
            key={elem.item.id}
            style={{
              marginBottom: "20px",
              background: "#fff",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={elem.item.img}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                marginRight: "20px",
              }}
            />
            <div>
              <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                {elem.item.title}
              </p>
              <p style={{ marginBottom: "5px" }}>${elem.item.price}</p>
              <input
                className="cart-item-input"
                onChange={(e) =>
                  changeProductCountInCoffeeCart(elem.item.id, e.target.value)
                }
                type="number"
                min={1}
                max={20}
                defaultValue={elem.count}
                style={{ marginBottom: "5px", width: "50px" }}
              />
              <p style={{ marginBottom: "5px" }}>Subtotal: ${elem.subPrice}</p>
              <button
                style={{ marginTop: "10px", marginLeft: "auto" }}
                onClick={() => deleteProductInCoffeeCart(elem.item.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <p>Total Price: ${coffeeCart.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartWithPayment;
