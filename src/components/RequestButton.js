import React, { Component } from "react";
import PropTypes from "prop-types";

const RequestButton = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

export default RequestButton;
