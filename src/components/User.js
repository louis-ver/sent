import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestServices from "./RequestServices";
import "./css/User.css";

class User extends Component {
  render() {
    return (
      <li onClick={() => this.props.onClick(this.props.id)}>
        <span>{this.props.name}</span>
        <RequestServices userId={this.props.id} />
      </li>
    );
  }
}

// User.propTypes = {
//   user: PropTypes.object.isRequired,
//   onSelect: PropTypes.func.isRequired,
//   selected: PropTypes.bool.isRequired
// };

export default User;
