import React from "react";
import left from "./assets/left.png";
import blog from "./assets/menu-img/reserve-cup-img.png";
import main from "./assets/menu-img/main-menu-img.png";
import left1 from "./assets/menu-img/left-bean-big.png";
import left2 from "./assets/menu-img/left-bean-small.png";
import right1 from "./assets/menu-img/right-bean-big.png";
import right2 from "./assets/menu-img/right-bean-small.png";

const Menu = () => {
  return (
    <div>
      <div>
        <img className="left1" src={left1} alt="" />
      </div>
      <div>
        <img className="left2" src={left2} alt="" />
      </div>
      <div>
        <img className="right1" src={right1} alt="" />
      </div>
      <div>
        <img className="right2" src={right2} alt="" />
      </div>
      <img className="main__munu-img" src={main} alt="" />
      <p className="menu2" style={{ color: "#F8E4BE", fontSize: "64px" }}>
        Menu
      </p>
      <div className="container__menu2">
        <div className="block5">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "100px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Black Tea</p>
              <p className="price">
                $20.00 <img className="blog animation1" src={blog} alt="" />
              </p>
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
              <p className="asortiment">Espresso</p>
              <p className="price">
                $40.00 <img className="blog animation2" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
        <div className="block6">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "100px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Green Tea</p>
              <p className="price">
                $25.00 <img className="blog animation3" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "60px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Cappuccino</p>
              <p className="price">
                $30.00 <img className="blog animation4" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
        <div className="block7">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "90px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Berry Еea</p>
              <p className="price">
                $45.00 <img className="blog animation5" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "125px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Mocha</p>
              <p className="price">
                $25.00 <img className="blog animation6" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
        <div className="block8">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "65px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Rosehip Tea</p>
              <p className="price">
                $50.00 <img className="blog animation7" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "145px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Latte</p>
              <p className="price">
                $25.00 <img className="blog animation8" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
        <div className="block9">
          <div style={{ marginLeft: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "110px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Lime Tea</p>
              <p className="price">
                $50.00 <img className="blog animation9" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
          <div style={{ marginRight: "7%" }}>
            <div
              style={{
                display: "flex",
                gap: "80px",
                alignItems: "center",
                marginBottom: "-40px",
              }}
            >
              <p className="asortiment">Americano</p>
              <p className="price">
                $25.00 <img className="blog animation10" src={blog} alt="" />
              </p>
            </div>
            <div>
              <img src={left} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
