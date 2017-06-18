import React, { Component } from "react";
import "./css/Send.css";

class Send extends Component {
  canSend() {
    return this.props.file !== null && this.props.users.length > 0;
  }

  render() {
    let canSendClass = this.canSend() ? "canSend" : "cannotSend";
    let tooltip = this.canSend() ? "" : "Select at least one recipient and a file to initiate a file transfer.";

    return (
      <div className={`Send ${canSendClass}`} onClick={() => this.props.send(this.props.users, this.props.file)} title={tooltip}>
        <div className="prompt">Send</div>
      </div>
    );
  }
}

export default Send;
