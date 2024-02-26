import React, { useState } from "react";
import "./product.scss";

const ImageZoom = ({ imageUrl, zoomFactor = 2, onClose }) => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    if (zoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setPosition({ x, y });
    }
  };

  const getZoomedImageStyle = () => {
    if (zoomed) {
      const bgX = position.x * 100;
      const bgY = position.y * 100;

      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${zoomFactor * 100}% ${zoomFactor * 100}%`,
        backgroundPosition: `${bgX}% ${bgY}%`,
      };
    }

    return {};
  };

  return (
    <div
      className="image-zoom-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="image-zoomed" style={getZoomedImageStyle()}></div>
      <img src={imageUrl} alt="Zoomable" />
    </div>
  );
};

export default ImageZoom;
