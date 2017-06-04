import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";
import "./css/Main.css";
import { broadcast } from "../server/utils/broadcaster";
import { addUserFromJoin, ping } from "../actions/index";
import actionType from "../constants/ActionTypes";
import { UDP_PORT } from "../constants/Addresses";
import { connectionHandler } from "../server/handlers/connectionHandler";
import Join from "../server/actions/join";

class Main extends Component {
  constructor(props) {
    super(props);
    // On server listen, send to everyone that I am online
    connectionHandler.addListeningHandler(() => {
      this.props.listeningHandler();
    });

    // Deal with receiving messages here
    connectionHandler.addMessageHandler((msg, rinfo) => {
      this.props.messageHandler(msg, rinfo);
    });

    broadcast(new Join(this.props.me));
  }
  render() {
    return (
      <div className="Main">
        <div className="top">
          <Header me={this.props.me.name} logo="sent" />
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

Main = connect()(Main);
export default Main;
