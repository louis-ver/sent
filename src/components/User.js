import React, { Component } from "react";
import RequestServices from "../containers/RequestServices";
import "./css/User.css";

class User extends Component {
  render() {
    let userSelectedClassName = this.props.selected ? "userSelected" : "userNotSelected"

    return (
      <li className={`User ${userSelectedClassName}`} onClick={() => this.props.toggleUserSelected(this.props.id)}>
        <span className="userName">{this.props.name}</span>
        <RequestServices userId={this.props.id} />
      </li>
    );
  }
}

export default User;
