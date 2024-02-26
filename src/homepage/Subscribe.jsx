import React from "react";
import icon from "./assets/subscribe-img/Group 15.png";

const Subscribe = () => {
  return (
    <div className="subscribe__wrapper">
      <div className="subscribe__main">
        <p className="subscribe__text">
          Subscribe To Our Newsletter, Discounts and Promotions
        </p>
        <div className="input-icon">
          {/* <img src={icon} className="icon-img" /> */}
          <input
            className="subscribe__input "
            type="text"
            placeholder="Your Email Address"
          />
        </div>

        <button className="subscribe__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
