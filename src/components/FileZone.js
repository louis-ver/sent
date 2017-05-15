import React, { Component } from 'react';
import {Notification} from './NotificationSend.js';
var Dropzone = require('react-dropzone');

class FileZone extends Component {
    constructor() {
        super();
        this.state = {
            files: null
        };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(filesArray) {
        console.log('Received files: ', filesArray);
        //this.setState({files: filesArray});
        this.props.onFileChange(filesArray);
    }
    onOpenClick() {
        this.refs.dropzone.open();
    }
    render() {
        return (
        <div className="FileZone">
            <div className="FileZone-box">
                <Dropzone ref="dropzone" onDrop={this.onDrop} className="DropZone" activeClassName="DropZone-active" disableClick={true}>
                    <p>Drag your files here</p>
                </Dropzone>
            </div>
        </div>
        );
    }
}

export {FileZone};
