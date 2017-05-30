import React from "react";
import "./css/RequestButton.css";

const RequestButton = ({ onClick, text, id }) => (
  <span className="RequestButton" onClick={() => onClick(id)}>{text}</span>
);

export default RequestButton;
