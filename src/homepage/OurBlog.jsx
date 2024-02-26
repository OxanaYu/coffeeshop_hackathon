import React, { useEffect, useRef, useState } from "react";
import "./aidana.scss";

import img1 from "./assets/our_blog/Ellipse 1.svg";
import img2 from "./assets/our_blog/Ellipse 2.svg";
import img3 from "./assets/our_blog/Ellipse 3.svg";
import img4 from "./assets/our_blog/arrow-right.svg";
import img5 from "./assets/our_blog/blog-bg.png";
import img6 from "./assets/our_blog/blog_deans.svg";
import img7 from "./assets/our_blog/caffeine.svg";
import img8 from "./assets/our_blog/caffeine2.svg";
import img9 from "./assets/our_blog/caffeine3.svg";
import img10 from "./assets/our_blog/cup1.svg";
import img11 from "./assets/our_blog/cup2.svg";
import img12 from "./assets/our_blog/cup3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OurBlog = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleMore = () => {
    setShowMore(!showMore);
  };
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const toggleMore1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleMore2 = () => {
    setShowMore2(!showMore2);
  };

  const toggleMore3 = () => {
    setShowMore3(!showMore3);
  };
  const toggleMore4 = () => {
    setShowMore4(!showMore4);
  };

  const toggleMore5 = () => {
    setShowMore5(!showMore5);
  };

  const toggleMore6 = () => {
    setShowMore6(!showMore6);
  };
  return (
    <div className="container05">
      <div className="our_title">
        <h2>Our Blog</h2>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="blog_content_1">
            <div className="blog_container1">
              <div className="item__title">
                <h3>How to make a great coffee</h3>
              </div>
              <div className="item__describe">
                <p>
                  Making a cup of coffee doesn't have to be complicated. Start
                  by gathering your supplies: coffee grounds, water, and a
                  French press, mug or other vessel. Next, measure out 2
                  tablespoons of ground coffee per 8 ounces of water. If you're
                  using a French{" "}
                  {showMore1 && (
                    <span>
                      press, pour the measured grounds into the bottom of the
                      press followed by hot water (between 195-205 degrees
                      Fahrenheit). Let sit for three minutes before gently
                      pushing down on the filter to trap the grounds at the
                      bottom; this will create an intense flavor with slightly
                      heavier body than filtered methods. If you have neither a
                      French press nor filter, just pour your measured grounds
                      directly into a mug or vessel and top with piping hot
                      water. Give it a stir and let it sit for 3-4 minutes
                      before consuming--but don't leave it too long as this
                      method won't produce quite as bold of a flavor as either
                      filtering or pressing would!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img10} alt="cup" />
                <img src={img11} alt="cup" />
                <img src={img12} alt="cup" />
              </div>
              <div className="icon__describe">
                <img src={img1} alt="img" />
                <p>steamed milk</p>
                <img src={img2} alt="img" />
                <p>milk foam</p>
                <img src={img3} alt="img" />
                <p>espersso</p>
              </div>
              <button onClick={toggleMore1} className="p_more">
                {showMore1 ? "Less" : "More"}{" "}
              </button>
            </div>
            <div className="blog_container1">
              <div className="item__title">
                <h3>Why does caffeine make us stay awake?</h3>
              </div>
              <div className="item__describe">
                <p>
                  Caffeine works by blocking adenosine receptors in the brain,
                  which facilitates energy production and makes us feel more
                  alert. Caffeine also increases adrenaline levels, further
                  boosting your energy and heart rate, as well as other hormones
                  like{" "}
                  {showMore2 && (
                    <span>
                      pdopamine that can make you feel more awake. The
                      combination of these effects makes caffeine a stimulant
                      that is all-too common in both food and drinks to give us
                      an extra boost of energy when we need it most. It's no
                      wonder why so many people rely on caffeinated beverages -
                      it really can make us stay awake!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img7} alt="caffeine" />
                <img src={img8} alt="caffeine" />
                <img src={img9} alt="caffeine" />
              </div>
              <div className="icon__descrition">
                <p>50%</p>
                <p>75%</p>
                <p>100%</p>
              </div>
              <button onClick={toggleMore2} className="p_more">
                {showMore2 ? "Less" : "More"}{" "}
              </button>
            </div>

            <div className="blog_container1">
              <div className="item__title">
                <h3>Different types of coffee Explained</h3>
              </div>
              <div className="item__describe">
                <p>
                  Caffeine works by blocking adenosine receptors in the brain,
                  which facilitates energy production and makes us feel more
                  alert. Caffeine also increases adrenaline levels, further
                  boosting your energy and heart rate, as well as other hormones
                  like{" "}
                  {showMore3 && (
                    <span>
                      pdopamine that can make you feel more awake. The
                      combination of these effects makes caffeine a stimulant
                      that is all-too common in both food and drinks to give us
                      an extra boost of energy when we need it most. It's no
                      wonder why so many people rely on caffeinated beverages -
                      it really can make us stay awake!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img6} alt="beans" />
              </div>
              <div className="icon__describe">
                <p>Different types of beans</p>
              </div>
              <button onClick={toggleMore3} className="p_more">
                {showMore3 ? "Less" : "More"}{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="blog_content_1">
            <div className="blog_container1">
              <div className="item__title">
                <h3>How to make a great coffee</h3>
              </div>
              <div className="item__describe">
                <p>
                  Making a cup of coffee doesn't have to be complicated. Start
                  by gathering your supplies: coffee grounds, water, and a
                  French press, mug or other vessel. Next, measure out 2
                  tablespoons of ground coffee per 8 ounces of water. If you're
                  using a French{" "}
                  {showMore4 && (
                    <span>
                      press, pour the measured grounds into the bottom of the
                      press followed by hot water (between 195-205 degrees
                      Fahrenheit). Let sit for three minutes before gently
                      pushing down on the filter to trap the grounds at the
                      bottom; this will create an intense flavor with slightly
                      heavier body than filtered methods. If you have neither a
                      French press nor filter, just pour your measured grounds
                      directly into a mug or vessel and top with piping hot
                      water. Give it a stir and let it sit for 3-4 minutes
                      before consuming--but don't leave it too long as this
                      method won't produce quite as bold of a flavor as either
                      filtering or pressing would!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img10} alt="cup" />
                <img src={img11} alt="cup" />
                <img src={img12} alt="cup" />
              </div>
              <div className="icon__describe">
                <img src={img1} alt="img" />
                <p>steamed milk</p>
                <img src={img2} alt="img" />
                <p>milk foam</p>
                <img src={img3} alt="img" />
                <p>espersso</p>
              </div>
              <button onClick={toggleMore4} className="p_more">
                {showMore4 ? "Less" : "More"}{" "}
              </button>
            </div>

            <div className="blog_container1">
              <div className="item__title">
                <h3>Why does caffeine make us stay awake?</h3>
              </div>
              <div className="item__describe">
                <p>
                  Caffeine works by blocking adenosine receptors in the brain,
                  which facilitates energy production and makes us feel more
                  alert. Caffeine also increases adrenaline levels, further
                  boosting your energy and heart rate, as well as other hormones
                  like{" "}
                  {showMore5 && (
                    <span>
                      pdopamine that can make you feel more awake. The
                      combination of these effects makes caffeine a stimulant
                      that is all-too common in both food and drinks to give us
                      an extra boost of energy when we need it most. It's no
                      wonder why so many people rely on caffeinated beverages -
                      it really can make us stay awake!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img7} alt="caffeine" />
                <img src={img8} alt="caffeine" />
                <img src={img9} alt="caffeine" />
              </div>
              <div className="icon__descrition">
                <p>50%</p>
                <p>75%</p>
                <p>100%</p>
              </div>
              <button onClick={toggleMore5} className="p_more">
                {showMore5 ? "Less" : "More"}{" "}
              </button>
            </div>

            <div className="blog_container1">
              <div className="item__title">
                <h3>Different types of coffee Explained</h3>
              </div>
              <div className="item__describe">
                <p>
                  Caffeine works by blocking adenosine receptors in the brain,
                  which facilitates energy production and makes us feel more
                  alert. Caffeine also increases adrenaline levels, further
                  boosting your energy and heart rate, as well as other hormones
                  like{" "}
                  {showMore6 && (
                    <span>
                      pdopamine that can make you feel more awake. The
                      combination of these effects makes caffeine a stimulant
                      that is all-too common in both food and drinks to give us
                      an extra boost of energy when we need it most. It's no
                      wonder why so many people rely on caffeinated beverages -
                      it really can make us stay awake!
                    </span>
                  )}
                </p>
              </div>
              <div className="item__icon">
                <img src={img6} alt="beans" />
              </div>
              <div className="icon__describe">
                <p>Different types of beans</p>
              </div>
              <button onClick={toggleMore6} className="p_more">
                {showMore6 ? "Less" : "More"}{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurBlog;
