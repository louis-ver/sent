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
import { UDP_PORT } from "../constants/Addresses";

class Main extends Component {
  constructor(props) {
    super(props);
    const connectionServer = dgram.createSocket("udp4");
    connectionServer.bind(UDP_PORT);
    // On server listen, send to everyone that I am online
    connectionServer.on("listening", () => {
      console.log(`Me: ${this.props.me}`);
      const message = { type: "JOIN", user: this.props.me };
      broadcast(message);
    });
    // Deal with receiving messages here
    connectionServer.on("message", (msg, rinfo) => {
      console.log(`in message receive: ${msg}`);
      this.props.dispatch(addUserFromJoin(msg));
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
