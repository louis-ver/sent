import React, { Component } from "react";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header me={this.props.me} />
        <UserServices />
        <Dropzone />
        <Send />
      </div>
    );
  }
}

export default Main;
