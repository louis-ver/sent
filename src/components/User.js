import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestServices from "./RequestServices";
import "./css/User.css";

class User extends Component {
  render() {
    return (
      <li className="User" onClick={() => this.props.onClick(this.props.id)}>
        <span>{this.props.name}</span>
        <RequestServices userId={this.props.id} />
      </li>
    );
  }
}

export default User;
