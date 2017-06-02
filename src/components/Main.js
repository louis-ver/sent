import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";
import "./css/Main.css";
import { broadcast } from "../server/utils/broadcaster";
import { addUserFromJoin } from "../actions/index";
import dgram from "dgram";
import actionType from "../constants/ActionTypes";
import ip from "ip";
import { UDP_PORT } from "../constants/Addresses";

class Main extends Component {
  constructor(props) {
    super(props);
    const connectionServer = dgram.createSocket("udp4");
    connectionServer.bind(UDP_PORT);
    // On server listen, send to everyone that I am online
    connectionServer.on("listening", () => {
      broadcast(addUserFromJoin(this.props.me));
    });
    // Deal with receiving messages here
    connectionServer.on("message", (msg, rinfo) => {
      const message = JSON.parse(msg.toString());
      switch (message.type) {
        case actionType.JOIN:
          if (!(rinfo.address === ip.address())) {
            this.props.dispatch(addUserFromJoin(message.user));
          }
          break;
        default:
          console.log("Unrecognized actionType");
      }
    });
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
