import React, { Component } from "react";
import "./css/Send.css";

class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sending: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({sending: !this.state.sending});
    }
    render() {
        let text = this.state.sending ? "Cancel" : "Send"; 
        return(
            <div className="Send" onClick={this.handleClick}>
                <div className="prompt">{text}</div>
            </div>
        )
    }
}

export default Send;