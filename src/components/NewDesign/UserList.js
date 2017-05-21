import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";

class UserList extends Component {
    render() {
        const userList = this.props.users;
        const userItems = userList.map((user) =>
            <User user={user} key={user.ip} />
        );
        return(
            <div className="UserList">
                <ul>
                    {userItems}
                </ul>
            </div>
        )
    }
}

UserList = connect((store, props) => {
    console.log(store.users);
    return {users: store.users}
})(UserList);

export default UserList;