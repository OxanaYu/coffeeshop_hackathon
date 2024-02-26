import React from "react";

import hero from "./assets/Hero Img.png";
import elza from "./assets/elza coffee.png";
import card from "./assets/card.png";
import corn1 from "./assets/зерно1.png";
import corn2 from "./assets/зерно2.png";
import corn3 from "./assets/зерно3.png";
import corn4 from "./assets/зерно4.png";
import corn5 from "./assets/зерно5.png";
import corn6 from "./assets/зерно6.png";
import corn7 from "./assets/зерно7.png";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="block-left">
        <img className="block-left-img" src={elza} alt="" />
        <p className="block-left-p">
          Today's good mood is sponsored by coffee search for your coffee now
        </p>
        <button className="shop-button">Shop Now</button>
        <button className="catalog-button">Catalog</button>
        <img className="card" src={card} alt="" />;
      </div>
      <div className="block-right">
        <img className="hero" src={hero} alt="" />
        <div style={{ display: "flex" }}>
          <div>
            <img className="corn7" src={corn7} alt="" />
          </div>
          <div>
            <img className="corn6" src={corn6} alt="" />
          </div>
          <div>
            <img className="corn5" src={corn5} alt="" />
          </div>
          <div>
            <img className="corn4" src={corn4} alt="" />
          </div>
          <div>
            <img className="corn3" src={corn3} alt="" />
          </div>
          <div>
            <img className="corn2" src={corn2} alt="" />
          </div>
          <div>
            <img className="corn1" src={corn1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
