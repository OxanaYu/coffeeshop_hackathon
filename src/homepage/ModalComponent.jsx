// ModalComponent.js
import React from "react";
import Modal from "react-modal";
import MapComponent from "./MapComponent";

const ModalComponent = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          backgroundColor: "#442318",
          border: "1px solid black",
          borderRadius: "10px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "600px",
          color: "#f3d8a6",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <p className="modal_p">
        Dear coffee lovers! Come and visit us at the address on the map! We
        invite you to become a part of our cosy coffee community! 🌟
      </p>
      <MapComponent />
    </Modal>
  );
};

export default ModalComponent;
