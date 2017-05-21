import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestTypes from "../../constants/RequestTypes"

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: RequestTypes.WAITING,
            progress: 0
        }
        this.handleAccept = this.handleAccept.bind(this);
        this.handleRefuse = this.handleRefuse.bind(this);
    }
    handleAccept(event) {
        this.setState({ 
            status: RequestTypes.IN_PROGRESS,
        });
    }
    handleRefuse(event) {
        this.setState({
            status: RequestTypes.REFUSED
        });
    }
    render() {
        let button;
        if (this.state.status === RequestTypes.WAITING) {
            button = (
                        <div>
                            <div className="accept" onClick={this.handleAccept}>ACCEPT</div>
                            <div className="refuse" onClick={this.handleRefuse}>REJECT</div>
                        </div>
                    );
        } else if (this.state.status === RequestTypes.COMPLETED) {
            button = (<div>COMPLETED</div>);
        } else if (this.state.status === RequestTypes.FAILED) {
            button = (<div>FAILED</div>);
        } else if (this.state.status === RequestTypes.REFUSED) {
            button = (<div>REFUSED</div>);
        } else {
            button = (<div className="inProgress">{this.state.progress} / {this.props.fileSize}</div>);
        }
        return(
            <div className="Request">
                <li>
                    <div className="fileName">
                        {this.props.fileName}
                    </div>
                    <div className="requestStatus">
                        {button}
                    </div>
                </li>
            </div>
        )
    }
 }

 Request.propTypes = {
    fileName: PropTypes.string.isRequired,
    fileSize: PropTypes.number.isRequired
 };

 export default Request;