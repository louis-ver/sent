import React, { Component } from "react";
import Modal from "react-modal";
import "./css/Send.css";

class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validSend: true
    };
    this.canSend = this.canSend.bind(this);
  }
  canSend(users, file) {
    if (file === null || users.length === 0) {
      this.setState({ validSend: false });
    }
    setTimeout(() => this.setState({ validSend: true }), 2000);
  }

  render() {
    let canSendClass = this.state.validSend ? "canSend" : "cannotSend";
    let errorModal = (
      <Modal
        className="Modal"
        isOpen={!this.state.validSend}
        contentLabel="validSend"
        overlayClassName="Overlay"
      >
        <p>
          Select at least one recipient and a file to initiate a file transfer.
        </p>
      </Modal>
    );
    return (
      <div>
        {errorModal}
        <div
          className={`Send ${canSendClass}`}
          onClick={() => this.canSend(this.props.users, this.props.file)}
        >
          <div className="prompt">Send</div>
        </div>
      </div>
    );
  }
}

export default Send;
