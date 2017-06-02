import React, { Component } from "react";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";
import "./css/Main.css";
import { broadcast } from "../server/utils/broadcaster";
import { addUserFromLogin } from "../actions/index";
import dgram from "dgram";
import { UDP_PORT } from "../constants/Addresses";

class Main extends Component {
  constructor(props) {
    super(props);
    const connectionServer = dgram.createSocket("udp4");
    connectionServer.bind(UDP_PORT);
    connectionServer.on("listening", () => {
      broadcast(addUserFromLogin(this.props.me));
    });
    connectionServer.on("message", (msg, rinfo) => {
      console.log(`Received ${msg} from ${rinfo.address}`);
    });
  }
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
