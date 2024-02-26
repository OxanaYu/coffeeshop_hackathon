import React from "react";
import "./product.scss";
const Pagination = ({ page, count, handleChange }) => {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => handleChange(page - 1)}>
        Previous
      </button>

      {[...Array(count).keys()].map((index) => (
        <button
          className="button_num"
          key={index + 1}
          onClick={() => handleChange(index + 1)}
          style={{
            color: "white",
            backgroundColor: page === index + 1 ? "#2c1a18" : "#e0a872",
          }}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={page === count}
        onClick={() => handleChange(page + 1)}
        style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
