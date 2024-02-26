import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PaymentForm = () => {
  const countries = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Kyrgyzstan",
    "Netherlands",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "UAE",
    "UK",
    "USA",
    "Argentina",
    "Egypt",
    "Iran",
    "Pakistan",
    "Poland",
    "Thailand",
    "Vietnam",
  ];

  const cities = [
    "Canberra",
    "Brasília",
    "Ottawa",
    "Beijing",
    "Paris",
    "Berlin",
    "New Delhi",
    "Jakarta",
    "Rome",
    "Tokyo",
    "Bishkek",
    "Amsterdam",
    "Moscow",
    "Riyadh",
    "Pretoria",
    "Seoul",
    "Madrid",
    "Stockholm",
    "Bern",
    "Ankara",
    "Abu Dhabi",
    "London",
    "Washington D.C.",
    "Buenos Aires",
    "Cairo",
    "Tehran",
    "Islamabad",
    "Warsaw",
    "Bangkok",
    "Hanoi",
  ];
  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("orderData", JSON.stringify(values));
    setSubmitting(false);
    setShowSuccess(true);
  };
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className="container">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          address: "",
          city: "",
          country: "",
          zipCode: "",
          paymentMethod: "",
          cardName: "",
          cardNumber: "",
          expMonth: "",
          expYear: "",
          cvv: "",
          deliveryMethod: "",
          deliveryAddress: "",
          phoneNumber: "",
        }}
        validationSchema={(values) => {
          return Yup.object().shape({
            fullName: Yup.string().required("Full name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            address: Yup.string().required("Address is required"),
            city: Yup.string().required("City is required"),
            country: Yup.string().required("Country is required"),
            zipCode: Yup.string().required("Zip code is required"),
            paymentMethod: Yup.string().required("Payment method is required"),
            ...(values?.paymentMethod === "card"
              ? {
                  cardName: Yup.string().required("Name on card is required"),
                  cardNumber: Yup.string().required(
                    "Credit card number is required"
                  ),
                  expMonth: Yup.string().required(
                    "Expiration month is required"
                  ),
                  expYear: Yup.string().required("Expiration year is required"),
                  cvv: Yup.string().required("CVV is required"),
                }
              : {}),
            deliveryMethod: Yup.string().required(
              "Delivery method is required"
            ),
            ...(values?.deliveryMethod === "courier" && {
              deliveryAddress: Yup.string().required(
                "Delivery address is required"
              ),
              phoneNumber: Yup.string().required("Phone number is required"),
            }),
          });
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col">
                <h3 className="title">Billing Address</h3>
                <div className="inputBox">
                  <label htmlFor="fullName">Full Name:</label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    className="input-error"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    className="input-error"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="address">Address:</label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="country - city - street"
                    className="input-error"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="city">City:</label>
                  <Field
                    as="select"
                    id="city"
                    name="city"
                    className="input-select"
                  >
                    <option value="">Select a city</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="country">Country:</label>
                  <Field
                    as="select"
                    id="country"
                    name="country"
                    className="input-select"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="inputBox">
                  <label htmlFor="zipCode">Zip Code:</label>
                  <Field
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="72 00 00"
                    className="input-error"
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="col">
                <h3 className="title">Delivery</h3>
                <div className="delivery-method">
                  <span className="input-label">Delivery Method:</span>
                  <div className="delivery-options">
                    <label htmlFor="courier" className="delivery-option">
                      <Field
                        type="radio"
                        name="deliveryMethod"
                        value="courier"
                        id="courier"
                      />
                      Delivery by Courier
                    </label>
                    <label htmlFor="pickup" className="delivery-option">
                      <Field
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        id="pickup"
                      />
                      Pick Up
                    </label>
                  </div>
                  <ErrorMessage
                    name="deliveryMethod"
                    component="div"
                    className="error-message"
                  />
                </div>
                {values.deliveryMethod === "pickup" && (
                  <div className="pickup-info">
                    <h4 style={{ fontFamily: "Andika", color: "black" }}>
                      Self Pick Up
                    </h4>
                    <p style={{ fontFamily: "Andika", color: "black" }}>
                      Our branches are located at:
                    </p>
                    <ul>
                      <li>123 Manas Street, City Bishkek</li>
                      <li>456 Oak Avenue, City Tokyo</li>
                      <li>789 Pine Road, City USA</li>
                    </ul>
                    <p style={{ fontFamily: "Andika", color: "black" }}>
                      Opening Hours: Monday to Friday, 9am - 5pm
                    </p>
                  </div>
                )}
                {values.deliveryMethod === "courier" && (
                  <div className="courier-info">
                    <div className="inputBox">
                      <label htmlFor="deliveryAddress">Delivery Address:</label>
                      <Field
                        type="text"
                        id="deliveryAddress"
                        name="deliveryAddress"
                        placeholder="Enter your delivery address"
                        className="input-error"
                      />
                      <ErrorMessage
                        name="deliveryAddress"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="inputBox">
                      <label htmlFor="phoneNumber">Phone Number:</label>
                      <Field
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        className="input-error"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                )}
                <h3 className="title">Payment</h3>
                <div className="payment-method">
                  <span className="input-label">Payment Method:</span>
                  <div className="payment-options">
                    <label htmlFor="card" className="payment-option">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        id="card"
                      />
                      Pay with Card
                    </label>
                  </div>
                  <ErrorMessage
                    name="paymentMethod"
                    component="div"
                    className="error-message"
                  />
                </div>
                {values.paymentMethod === "card" && (
                  <div className="card-payment">
                    <img
                      src="https://freepngimg.com/thumb/credit_card/25630-8-credit-card-visa-and-master-card-hd.png"
                      alt=""
                    />
                    <div className="inputBox">
                      <label htmlFor="cardName">Name on Card:</label>
                      <Field
                        type="text"
                        id="cardName"
                        name="cardName"
                        placeholder="Mr. John Smith"
                        className="input-error"
                      />
                      <ErrorMessage
                        name="cardName"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="inputBox">
                      <label htmlFor="cardNumber">Credit Card Number:</label>
                      <Field
                        type="number"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1111-2222-3333-4444"
                        className="input-error"
                      />
                      <ErrorMessage
                        name="cardNumber"
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="inputBox">
                      <div className="flex">
                        <div className="inputBox">
                          <label htmlFor="expMonth">Expiration Month:</label>
                          <Field
                            type="text"
                            id="expMonth"
                            name="expMonth"
                            placeholder="January"
                            className="input-error"
                          />
                          <ErrorMessage
                            name="expMonth"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="inputBox">
                          <label htmlFor="expYear">Expiration Year:</label>
                          <Field
                            type="number"
                            id="expYear"
                            name="expYear"
                            placeholder="2028"
                            className="input-error"
                          />
                          <ErrorMessage
                            name="expYear"
                            component="div"
                            className="error-message"
                          />
                        </div>
                        <div className="inputBox">
                          <label htmlFor="cvv">CVV:</label>
                          <Field
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            className="input-error"
                          />
                          <ErrorMessage
                            name="cvv"
                            component="div"
                            className="error-message"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {showSuccess && (
              <div
                style={{
                  fontFamily: "Dancing Script",
                  color: "black",
                  fontWeight: 700,
                }}
              >
                <p>Your order has been successfully proceeded!</p>
              </div>
            )}
            {!showSuccess && (
              <input
                type="submit"
                value={isSubmitting ? "Submitting..." : "Proceed to Checkout"}
                className="submit-btn"
                disabled={isSubmitting}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
