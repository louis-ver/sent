import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestList from "./RequestList";
import "./css/User.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
  }
  setActive(ip) {
    this.props.onSelect(ip);
  }
  render() {
    let activeClass = this.props.selected === true ? "User-active" : "User";
    return (
      <li
        className={activeClass}
        onClick={() => this.setActive(this.props.user.ip)}
      >
        <span className="name">{this.props.user.name}</span>
        <RequestList user={this.props.user} selected={this.props.selected} />
      </li>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default User;