import React, { Component } from "react";
import "./css/RequestButton.css";

class RequestButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id, e) {
    e.stopPropagation();
    this.props.onClick(id);
  }
  render() {
    return (
      <span
        className="RequestButton"
        onClick={e => this.handleClick(this.props.id, e)}
      >
        {this.props.text}
      </span>
    );
  }
}
export default RequestButton;
