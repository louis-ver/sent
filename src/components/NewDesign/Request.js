import React, { Component } from "react";
import PropTypes from "prop-types";
import RequestTypes from "../../constants/RequestTypes";
import $ from "jquery";
import filesize from "filesize";
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
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleAccept(event) {
        event.stopPropagation();
        let c = this;
        console.log("After propagation");
        this.transition(() => {
            // debugger;
            c.setState({ 
                status: RequestTypes.IN_PROGRESS,
            }, () => {$(`li.${this.props.request.guid} .statusLabel`).fadeIn("fast")});
        });
    }
    handleRefuse(event) {
        event.stopPropagation();
        let c = this;
        this.transition(() => {
            c.setState({
                status: RequestTypes.REFUSED
            }, () => {$(`li.${this.props.request.guid} .statusLabel`).fadeIn("fast")});
        });
    }
    handleCancel(event) {
        event.stopPropagation();
        // Delete incoming request from User
    }
    transition(intermediaryFunction) {
        $(`li.${this.props.request.guid} .buttons`).fadeOut("fast", () => {
            intermediaryFunction();
        });
    }
    render() {
        let button;
        let activeClass = this.props.active ? "requestStatus-active" : "requestStatus";
        if (this.state.status === RequestTypes.WAITING) {
            button = (
                        <div className="buttons">
                            <span className="button" onClick={this.handleAccept}>ACCEPT</span>
                            <span className="spliter"> | </span>
                            <span className="button" onClick={this.handleRefuse}>DECLINE</span>
                        </div>
                    );
        } else if (this.state.status === RequestTypes.COMPLETED) {
            button = (<div className="statusLabel">COMPLETED</div>);
        } else if (this.state.status === RequestTypes.FAILED) {
            button = (<div className="statusLabel">FAILED</div>);
        } else if (this.state.status === RequestTypes.REFUSED) {
            button = (<div className="statusLabel">DECLINED</div>);
        } else {
            button = (<div className="statusLabel">{this.state.progress} / {filesize(this.props.request.fileSize)} | <span className="button" onClick={this.handleCancel}>CANCEL</span></div>);
        }
        return(
            <li className={this.props.request.guid}>
                    <div className="fileName">
                        {this.props.request.fileName}
                    </div>
                    <div className={activeClass}>
                        {button}
                    </div>
            </li>
        )
    }
 }

 Request.propTypes = {
    request: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired
 };

 export default Request;