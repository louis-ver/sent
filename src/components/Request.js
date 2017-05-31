import React, { Component } from "react";
import RequestButton from "./RequestButton";
import { requestStatus } from "../constants/requests";
import filesize from "filesize";
import "./css/Request.css";

class Request extends Component {
  render() {
    let request = this.props.request;
    const status = request.status;
    let button = null;
    if (status === requestStatus.WAITING) {
      button = (
        <div>
          <span className="fileSize">
            {filesize(request.file.size)}
          </span>
          <RequestButton
            onClick={this.props.onRequestAccept}
            text="ACCEPT"
            id={request.id}
          />
          <RequestButton
            onClick={this.props.onRequestDecline}
            text="DECLINE"
            id={request.id}
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
            {Math.floor(request.file.progress / request.file.size)}
            %
          </span>
          <RequestButton
            onClick={this.props.onRequestCancel}
            text="CANCEL"
            id={request.id}
          />
        </div>
      );
    } else if (status === requestStatus.DECLINED) {
      const buttonStyle = { color: "black" };
      button = <RequestButton text="DECLINED" style={buttonStyle} />;
    } else {
      const buttonStyle = { color: "black" };
      button = <RequestButton text="CANCELED" style={buttonStyle} />;
    }
    return (
      <li className="Request">
        <div className="fileName">{request.file.name}</div>
        <div className="buttons">{button}</div>
      </li>
    );
  }
}

export default Request;
