import React, { Component } from "react";
import User from "./User";

class UserList extends Component {
  render() {
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
