import React, { useEffect, useRef, useState } from "react";
import "./oxana.css";
import bg from "../homepage/assets/review-img/customer-review-BG.png";
import beanbig from "../homepage/assets/review-img/review-bean-big.png";
import beantop from "../homepage/assets/review-img/review-bean-top.png";
import beanbot from "../homepage/assets/review-img/review-bean-bot.png";
import iren from "../homepage/assets/review-img/iren.png";
import nazar from "../homepage/assets/review-img/nazar.png";
import revpers1 from "../homepage/assets/review-img/rev_person_1.png";
import revpers2 from "../homepage/assets/review-img/rev_person_2.png";
import revpers3 from "../homepage/assets/review-img/rev_person_3.png";
import revpers4 from "../homepage/assets/review-img/rev_person_4.png";
import revpers5 from "../homepage/assets/review-img/rev_person_5.png";
import { ReactComponent as RevQmark } from "../homepage/assets/review-img/rev_qmark.svg";
import { ReactComponent as RevStars } from "../homepage/assets/review-img/rev_stars.svg";
import vasa from "../homepage/assets/review-img/vasa.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {
  Pagination,
  Controller,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
      <section
        className="review"
        style={{
          backgroundImage: `url(${beanbig}), url(${beantop}), url(${beanbot})`,
          backgroundPosition: "top left, 5% center, bottom left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="review__container">
          <div className="review__title">
            <h2>customer review</h2>
          </div>
          <div className="review__border">
            <div
              className="swiper review__slider-container"
              style={{
                backgroundImage: `url(${bg}
                  )`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="swiper-wrapper review__slider swiper-container">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation={{
                    nextEl: ".swiper-button-next3",
                    prevEl: ".swiper-button-prev3",
                  }}
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                  speed={1500}
                >
                  <SwiperSlide>
                    <div className="swiper-slide swiper-slide3 review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={revpers1} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Tyler Student</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          I love spending my downtime in a cozy coffee shop,
                          surrounded by the sweet aroma of freshly brewed drinks
                          and pastries.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={revpers2} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Joanna Doe</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          I love spending my downtime in a cozy coffee shop,
                          surrounded by the sweet aroma of freshly brewed drinks
                          and pastries.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={revpers3} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>John Doe</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          I love spending my downtime in a cozy coffee shop,
                          surrounded by the sweet aroma of freshly brewed drinks
                          and pastries.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={revpers4} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Melissa Doe</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          I love spending my downtime in a cozy coffee shop,
                          surrounded by the sweet aroma of freshly brewed drinks
                          and pastries.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={revpers5} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Jane Doe</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          I love spending my downtime in a cozy coffee shop,
                          surrounded by the sweet aroma of freshly brewed drinks
                          and pastries.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={nazar} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Nazar Kekosh</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          A web developer and just a good person who lives in
                          Ukraine and wishes everyone good luck! See you
                          again...
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={iren} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Iryna Pec</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          A web developer and just a good person who lives in
                          Ukraine and wishes everyone good luck! See you
                          again...
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide review__card">
                      <div className="review__marks">
                        <RevQmark />
                      </div>
                      <div className="review__card-image">
                        <img src={vasa} alt="img" />
                      </div>
                      <div className="review__name">
                        <p>Vasyl Melko</p>
                      </div>
                      <div className="review__star">
                        <RevStars />
                      </div>
                      <div className="review__describe">
                        <p>
                          A web developer and just a good person who lives in
                          Ukraine and wishes everyone good luck! See you
                          again...
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-button-next swiper-button-next3"></div>
              <div className="swiper-button-prev swiper-button-prev3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
