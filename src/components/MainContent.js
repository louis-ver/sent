import React, { Component } from "react";
import UserServices from "./UserServices";
import "./css/MainContent.css";
import Dropzone from "./Dropzone";
import Send from "./Send";

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        <UserServices />
        <Dropzone />
        <Send />
      </div>
    );
  }
}

export default MainContent;
