import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserServices from "../containers/UserServices";
import Dropzone from "./Dropzone";
import Send from "./Send";
import "./css/Main.css";
import { broadcast } from "../server/utils/broadcaster";
import { addUserFromJoin, ping } from "../actions/index";
import dgram from "dgram";
import actionType from "../constants/ActionTypes";
import ip from "ip";
import { UDP_PORT } from "../constants/Addresses";
import {connectionService} from "../server/services/connectionService";

class Main extends Component {
  constructor(props) {
    super(props);
    // On server listen, send to everyone that I am online
    connectionService.addListeningHandler(() => {
      broadcast(addUserFromJoin(this.props.me));
    });

    // Deal with receiving messages here
    connectionService.addMessageHandler((msg, rinfo) => {
      const message = JSON.parse(msg.toString());
      if (rinfo.address === ip.address()) {
        return;
      }
      switch (message.type) {
        case actionType.JOIN:
          this.props.dispatch(addUserFromJoin(message.user));
          broadcast(ping(this.props.me));
          break;
        case actionType.PING:
          this.props.dispatch(addUserFromJoin(message.user));
          break;
        default:
          console.log("Unrecognized actionType");
      }
    });

    broadcast(addUserFromJoin(this.props.me));
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
