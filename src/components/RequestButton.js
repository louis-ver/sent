import React from "react";

const RequestButton = ({ onClick, text, id }) => (
  <div onClick={() => onClick(id)}>{text}</div>
);

export default RequestButton;
