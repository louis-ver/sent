import React, { Component } from "react";
import UserList from "./UserList";
import "./css/MainContent.css";

class MainContent extends Component {
    render() {
        return(
            <div className="MainContent">
                <UserList />
                {/*<DropZone />
                <Send />*/}
            </div>
        )
    }
}

export default MainContent;