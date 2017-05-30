import React, { Component } from "react";
import Request from "./Request";
import "./css/RequestList.css";

class RequestList extends Component {
  render() {
    const requestList = this.props.requests;
    const requestItems = requestList.map(request => (
      <Request
        request={request}
        key={request.id}
        onRequestAccept={this.props.onRequestAccept}
        onRequestDecline={this.props.onRequestDecline}
        onRequestCancel={this.props.onRequestCancel}
      />
    ));
    let requestHeader = requestList.length ? "Incoming Requests" : null;
    return (
      <div className="RequestList">
        <div className="requestHeader">{requestHeader}</div>
        <ul>
          {requestItems}
        </ul>
      </div>
    );
  }
}

export default RequestList;
