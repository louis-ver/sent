import React, { Component } from "react";
import { fileHandler } from "../server/handlers/fileHandler";
import User from "./User";
import {PROPOSE} from "../constants/ActionTypes";
import "./css/UserList.css";

class UserList extends Component {
  constructor(props) {
    super(props);

    fileHandler.addMessageHandler((ip, data) => {
      if(data.type === PROPOSE) {
        let senderId = this.props.getUserIdFromUserIp(ip);
        this.props.addProposition(senderId, data.content);
      }
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
    const display = userItems === null ? <span className="noOnlineUsersPrompt loading">Looking for people nearby<br /></span> : userItems;
    return (
      <div className="UserList">
        <ul>
          {display}
        </ul>
      </div>
    );
  }
}

export default UserList;
