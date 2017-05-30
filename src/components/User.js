import React, { Component } from "react";
import RequestServices from "../containers/RequestServices";
import "./css/User.css";

class User extends Component {
  render() {
    return (
      <li className="User">
        <span>{this.props.name}</span>
        <RequestServices userId={this.props.id} />
      </li>
    );
  }
}

export default User;
