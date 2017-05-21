import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestTypes from "../../constants/RequestTypes"
import $ from "jquery";
import "./css/Request.css";

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: RequestTypes.WAITING,
            progress: 0
        }
        this.handleAccept = this.handleAccept.bind(this);
        this.handleRefuse = this.handleRefuse.bind(this);
        this.transition = this.transition.bind(this);
    }
    handleAccept(event) {
        let c = this;
        this.transition(() => {
            // debugger;
            c.setState({ 
                status: RequestTypes.IN_PROGRESS,
            }, () => {$(".statusLabel").fadeIn("fast")});
        });
    }
    handleRefuse(event) {
        let c = this;
        this.transition(() => {
            c.setState({
                status: RequestTypes.REFUSED
            }, () => {$(".statusLabel").fadeIn("fast")});
        });
    }
    transition(intermediaryFunction) {
        $(".buttons").fadeOut("fast", () => {
            intermediaryFunction();
        });
    }
    render() {
        let button;
        if (this.state.status === RequestTypes.WAITING) {
            button = (
                        <div className="buttons">
                            <span className="button" onClick={this.handleAccept}>ACCEPT</span>
                            <span> | </span>
                            <span className="button" onClick={this.handleRefuse}>REJECT</span>
                        </div>
                    );
        } else if (this.state.status === RequestTypes.COMPLETED) {
            button = (<div className="statusLabel">COMPLETED</div>);
        } else if (this.state.status === RequestTypes.FAILED) {
            button = (<div className="statusLabel">FAILED</div>);
        } else if (this.state.status === RequestTypes.REFUSED) {
            button = (<div className="statusLabel">REFUSED</div>);
        } else {
            button = (<div className="statusLabel">{this.state.progress} / {this.props.fileSize}</div>);
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