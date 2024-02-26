import React, { useEffect } from "react";
import { useBM } from "../context/FavoriteContext";

const Favorite = () => {
  const { bookmarks, deletePostFromBM } = useBM();

  return (
    <div className="container_favorite">
      <div
        className="font"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {bookmarks.map((elem) => (
          <div
            key={elem.id}
            style={{
              height: "480px",
              boxShadow: "none",
              margin: "100px 100px",
              width: "300px",
              border: "2px solid #f3d8a6",
              borderRadius: "50px",
              textAlign: "center",
              padding: "15px",
            }}
          >
            <div
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "50px",
                overflow: "hidden",
              }}
            >
              {elem.img && (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundColor: "rgb(174, 149, 126)",
                  }}
                  src={elem.img}
                  alt={elem.title}
                />
              )}
            </div>
            <div style={{ padding: "20px 5px 0 5px" }}>
              <div style={{ fontSize: "18px" }}>{elem.title}</div>
              <div
                style={{
                  color: "#f3d8a6",
                  fontSize: "15px",
                  fontWeight: "700",
                  marginTop: "7px",
                }}
              >
                {elem.description}
              </div>
              <button
                style={{
                  marginTop: "9%",
                  border: "1px solid #f3d8a6",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "10px",
                  backgroundColor: "rgb(174, 149, 126)",
                  width: "80px",
                  height: "35px",
                }}
                onClick={() => deletePostFromBM(elem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
