import React from "react";
import ImageZoom from "./ImageZoom";
import "./product.scss";

const Details = (props) => {
  const { elem, open, handleClose } = props;

  return (
    <div style={{ display: open ? "block" : "none" }}>
      <div className="modal_detail">
        <ImageZoom imageUrl={elem.img} zoomFactor={2} onClose={handleClose} />

        <div>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}$</p>
        </div>
        <div>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
