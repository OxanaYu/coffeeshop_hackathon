import React from "react";
import left from "./assets/left.png";
import right from "./assets/right.png";
import Popularmenu from "./assets/Popularmenu Img.png";
import assets from "./assets/стрелочка.png";

const PapularMenu = () => {
  return (
    <div>
      <p className="menu" style={{ color: "#F8E4BE", fontSize: "64px" }}>
        Popular menu
      </p>
      <div className="container__menu">
        <img className="popularmenu" src={Popularmenu} alt="" />
        <div className="block1">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "100px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="price">$40.00</p>
              <p className="asortiment">Chocolate</p>
            </div>
            <div style={{ margin: "0px" }}>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "100px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Espersso</p>
              <p className="price">$30.00</p>
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        <div className="block2">
          <div style={{ marginLeft: "3%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "100px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="price">$25.00</p>
              <p className="asortiment">Double es</p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "3%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "60px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Cappuccino</p>
              <p className="price">$30.00</p>
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        <div className="block3">
          <div style={{ marginLeft: "6%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "120px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="price">$45.00</p>
              <p className="asortiment">Caramel</p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "6%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "125px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Mocha</p>
              <p className="price">$25.00</p>
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
        <div className="block4">
          <div style={{ marginLeft: "11%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "145px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="price">$50.00</p>
              <p className="asortiment">Doppio</p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "11%", marginTop: "3%" }}>
            <div
              style={{
                display: "flex",
                gap: "145px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Latte</p>
              <p className="price">$25.00</p>
            </div>
            <div>
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
      <p className="our__menu">
        Our menu <img style={{ width: "17px" }} src={assets} alt="" />
      </p>
    </div>
  );
};

export default PapularMenu;
