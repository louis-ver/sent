import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class UserList extends Component {
  render() {
    console.log(this.props.users);
    const userList = this.props.users;
    const userItems = userList.map(user => (
      <User name={user.name} id={user.id} key={user.id} />
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
