import React, { Component } from "react";
import { fileHandler } from "../server/handlers/fileHandler";
import User from "./User";
import {PROPOSE} from "../constants/ActionTypes";
import "./css/UserList.css";

class UserList extends Component {
  constructor(props) {
    super(props);

    connectionHandler.addFileHandler((ip, data) => {
      debugger;
      if(data.type === PROPOSE)
        this.props.addProposition(data.content);
    });
  }
  render() {
    const userList = this.props.users;
    const userItems = userList.map(user => (
      <User
        name={user.name}
        id={user.id}
        key={user.id}
        selected={user.selected}
        toggleUserSelected={this.props.toggleUserSelected}
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
