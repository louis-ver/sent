import React, { Component } from "react";
import "./css/Header.css";

class Header extends Component {
  render() {
    let headerColor = this.props.me
      ? { backgroundColor: "#6E00B9" }
      : { backgroundColor: "white" };

    return (
      <div className="Header" style={headerColor}>
        <div className="appName">{this.props.logo}</div>
        <div className="userName">{this.props.me}</div>
      </div>
    );
  }
}

export default Header;
