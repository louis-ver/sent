import React, { Component } from "react";
import PropTypes from "prop-types";
import Request from "./Request";
import "./css/RequestList.css";

class RequestList extends Component {
  render() {
    const requestList = this.props.requests;
    console.log(`RequestList: ${typeof requestList}`);
    const requestItems = requestList.map(request => (
      <Request
        request={request}
        key={request.id}
        onAccept={this.props.onAccept}
        onDecline={this.props.onDecline}
        onCancel={this.props.onCancel}
      />
    ));
    let requestHeader = requestList.length ? "Incoming Requests" : null;
    return (
      <div className="RequestList">
        <span>{requestHeader}</span>
        <ul>
          {requestItems}
        </ul>
      </div>
    );
  }
}

// RequestList.propTypes = {
//   user: PropTypes.object.isRequired
// };

export default RequestList;
