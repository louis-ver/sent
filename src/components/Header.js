import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">sent</div>
        <div className="name">{this.props.me}</div>
      </div>
    );
  }
}

export default Header;
