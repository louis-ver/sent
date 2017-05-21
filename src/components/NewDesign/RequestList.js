import React, { Component } from "react";
import PropTypes from "prop-types";
import Request from "./Request";
import "./css/RequestList.css";

class RequestList extends Component {
    render() {
        const requestList = this.props.user.incomingRequests;
        const requestItems = requestList.map((request) =>
            <Request request={request} key={request.guid} />
        );
        let requestHeader = this.props.user.incomingRequests.length ? <span>Incoming Requests</span> : null
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

RequestList.propTypes = {
    user: PropTypes.object.isRequired,
};

export default RequestList;