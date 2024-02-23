import React, { useState } from "react";
import { useCoffeeCart } from "../../context/CartContext";
const PaymentForm = () => {
  const {
    coffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  const [contactInfo, setContactInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    saveInfo: false,
    textMe: false,
    country: "",
  });
  const [billingInfo, setBillingInfo] = useState({
    useShippingAddress: true,
    postalCode: "",
    billingCity: "",
    billingAddress: "",
    billingFirstName: "",
    billingLastName: "",
    billingPhone: "",
  });
  const handleContactInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setContactInfo({
      ...contactInfo,
      [name]: newValue,
    });
  };
  const handleBillingInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setBillingInfo({
      ...billingInfo,
      [name]: newValue,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="payment-page">
      <div className="left-half">
        <div className="contact-delivery-section">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={contactInfo.email}
              onChange={handleContactInputChange}
              placeholder="Email"
              required
            />
          </form>
        </div>
        <div className="cart-section">
          <div className="cart-container">
            {coffeeCart.products.map((elem) => (
              <div className="cart-item" key={elem.item.id}>
                <img
                  className="cart-item-image"
                  src={elem.item.img}
                  alt={elem.item.title}
                />
                <div className="cart-item-details">
                  <p className="cart-item-title">{elem.item.title}</p>
                  <p className="cart-item-description">
                    {elem.item.description}
                  </p>
                  <p className="cart-item-category">{elem.item.category}</p>
                  <p className="cart-item-price">${elem.item.price}</p>
                  <input
                    className="cart-item-input"
                    onChange={(e) =>
                      changeProductCountInCoffeeCart(
                        elem.item.id,
                        e.target.value
                      )
                    }
                    type="number"
                    min={1}
                    max={20}
                    value={elem.count}
                  />
                  <p>Total: ${elem.subPrice}</p>
                  <button
                    className="cart-item-delete"
                    onClick={() => deleteProductInCoffeeCart(elem.item.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
            <p className="total-price">Total Price: {coffeeCart.totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="right-half">
        <div className="payment-form-section">
          <h2>Payment</h2>
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;