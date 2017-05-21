import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestList from "./RequestList";
import "./css/User.css";

class User extends Component {
    render() {
        return (
            <li className="User">
                <span className="name">{this.props.user.name}</span>
                <RequestList user={this.props.user} />
            </li>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;