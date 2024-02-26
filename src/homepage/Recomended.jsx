import React, { useEffect, useRef, useState } from "react";
import images from "./recomendedImages";
import { motion } from "framer-motion";
import "./aidana.scss";

const Recomended = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });
  return (
    <div className="recommended">
      <div>
        <h2>Recommended</h2>
      </div>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner_carousel"
        >
          {images.map((image) => (
            <motion.div className="item">
              <img src={image} key={image} alt="" />
              <div className="titles">
                <h3>Arabica</h3>
                <p>Dark Roast</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Recomended;
