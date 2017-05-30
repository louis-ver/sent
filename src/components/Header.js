import React, { Component } from "react";
import "./css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="appName">{this.props.logo}</div>
        <div className="userName">{this.props.me}</div>
      </div>
    );
  }
}

export default Header;
