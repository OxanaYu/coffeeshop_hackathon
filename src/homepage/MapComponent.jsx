// MapComponent.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconUrl from "./assets/map-img/6555118.png";

const MapComponent = () => {
  useEffect(() => {
    const map = L.map("map").setView([42.8746, 74.5698], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    const customIcon = new L.Icon({
      iconUrl: iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.marker([42.8746, 74.5698], { icon: customIcon })
      .addTo(map)
      .bindPopup("We're here :)");
  }, []);

  return (
    <div
      className="map"
      id="map"
      style={{
        height: "450px",
        width: "600px",
        marginLeft: "7%",
        borderRadius: "10px",
        border: "2px solid white",
        border: "1px solid black",
      }}
    ></div>
  );
};

export default MapComponent;
