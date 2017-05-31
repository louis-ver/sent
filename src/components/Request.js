import React, { Component } from "react";
import RequestButton from "./RequestButton";
import { requestStatus } from "../constants/requests";
import filesize from "filesize";
import "./css/Request.css";

class Request extends Component {
  render() {
    const status = this.props.request.status;
    let button = null;
    if (status === requestStatus.WAITING) {
      button = (
        <div>
          <span>{filesize(this.props.request.file.size)}</span>
          <RequestButton
            onClick={this.props.onRequestAccept}
            text="ACCEPT"
            id={this.props.request.id}
          />
          <RequestButton
            onClick={this.props.onRequestDecline}
            text="DECLINE"
            id={this.props.request.id}
          />
        </div>
      );
    } else if (
      status === requestStatus.IN_PROGRESS ||
      status === requestStatus.ACCEPTED
    ) {
      button = (
        <div>
          <span>
            {Math.floor(
              this.props.request.file.progress / this.props.request.file.size
            )}
            %
          </span>
          <RequestButton onClick={this.props.onRequestCancel} text="CANCEL" />
        </div>
      );
    } else {
      const buttonStyle = { color: "black" };
      button = <RequestButton text="DECLINED" style={buttonStyle} />;
    }
    return (
      <li className="Request">
        <div className="fileName">{this.props.request.file.name}</div>
        <div className="buttons">{button}</div>
      </li>
    );
  }
}

export default Request;
