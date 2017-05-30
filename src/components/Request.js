import React, { Component } from "react";
import PropTypes from "prop-types";
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
          <RequestButton onClick={this.props.onAccept} text="ACCEPT" />
          <RequestButton onClick={this.props.onDecline} text="DECLINE" />
        </div>
      );
    } else if (status === requestStatus.IN_PROGRESS) {
      button = <RequestButton onClick={this.props.onCancel} text="CANCEL" />;
    } else {
      button = <RequestButton text="DECLINED" />;
    }
    return (
      <li className="Request">
        <div className="fileName">{this.props.request.file.name}</div>
        <div className="buttons">{button}</div>
      </li>
    );
  }
}

Request.propTypes = {
  request: PropTypes.object.isRequired
};

export default Request;
