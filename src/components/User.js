import React, { Component } from "react";
import RequestServices from "../containers/RequestServices";
import "./css/User.css";

class User extends Component {
  render() {
    return (
      <li className="User" onClick={() => this.props.onClick(this.props.id)}>
        <span className="userName">{this.props.name}</span>
        <RequestServices userId={this.props.id} />
      </li>
    );
  }
}

export default User;
