import React, { Component } from "react";
import UserList from "./UserList";
import "./css/MainContent.css";
import Dropzone from './Dropzone';
import Send from "./Send";

class MainContent extends Component {
    render() {
        return(
            <div className="MainContent">
                <UserList />
                <Dropzone />
                <Send />
            </div>
        )
    }
}

export default MainContent;