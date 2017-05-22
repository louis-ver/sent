import React, { Component } from "react";
import UserList from "./UserList";
import "./css/MainContent.css";
import Dropzone from './Dropzone';

class MainContent extends Component {
    render() {
        return(
            <div className="MainContent">
                <UserList />
                <Dropzone />
            </div>
        )
    }
}

export default MainContent;