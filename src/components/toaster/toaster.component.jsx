import React from "react";
import { Toast } from "react-bootstrap";

const Toaster = ({
  title,
  message,
  onCloseHandle,
  showModal,
  animation,
  autohide
}) => {
  return (
    <Toast
      onClose={onCloseHandle}
      show={showModal}
      animation={animation}
      autohide={autohide}
      style={{
        position: "absolute",
        top: "10%",
        right: "10%"
      }}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">{title}</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default Toaster;
