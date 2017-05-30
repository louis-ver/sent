import React, { Component } from "react";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";
import "./css/Main.css";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="top">
          <Header me={this.props.me} logo="sent" />
          <UserServices />
        </div>
        <div className="bottom">
          <Dropzone />
          <Send />
        </div>
      </div>
    );
  }
}

export default Main;
