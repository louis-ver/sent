import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }
  handleUserSelect(ip) {
    if (this.state.selected.indexOf(ip) !== -1) {
      let selectedUsers = this.state.selected.slice();
      selectedUsers = selectedUsers.filter(user => {
        return user !== ip;
      });
      this.setState({ selected: selectedUsers });
    } else {
      let selectedUsers = this.state.selected.slice();
      selectedUsers.push(ip);
      this.setState({ selected: selectedUsers });
    }
  }
  render() {
    const userList = this.props.users;
    const userItems = userList.map(user => (
      <User
        user={user}
        key={user.ip}
        onSelect={this.handleUserSelect}
        selected={this.state.selected.indexOf(user.ip) !== -1}
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

UserList = connect((store, props) => {
  return { users: store.users };
})(UserList);

export default UserList;
