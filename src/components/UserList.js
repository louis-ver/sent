import React, { Component } from "react";
import User from "./User";
import "./css/UserList.css";

class UserList extends Component {
  render() {
    const userList = this.props.users;
    const userItems = userList.map(user => (
      <User
        name={user.name}
        id={user.id}
        key={user.id}
        onClick={this.props.onClick}
      />
    ));
    return (
      <div className="UserList">
        <ul>
          {userItems}
        </ul>
      </div>
    );
  }
}

export default UserList;
