import React, { Component } from 'react';
import {OrderedSet} from 'immutable';
import {NotificationStack} from 'react-notification';
import './NotificationSend.css';


class NotificationSend extends Component {
    constructor() {
        super();
        this.state = {
            notifications:[],
            count: 0
        };
        this.removeNotification = this.removeNotification.bind(this);
        this.containsFiles = this.containsFiles.bind(this);
    }
    addNotification() {
    const { notifications, count } = this.state;
    notifications[0] = {
        message: (<FileTransferSend files={this.props.files} user={this.props.user} sendFile={this.props.sendFile}/>),
        key: 'fileSend',
        dismissAfter: false
    };
    return this.setState({
      notifications: notifications
    });
  }
    componentDidUpdate(prevProps, prevState){
        if(this.containsFiles() && prevProps !== this.props){
            this.addNotification();
        }

     }
    removeNotification (count) {
        const {notifications} = this.state;
        this.setState({
            notifications: this.state.notifications.filter(n => n.key !== count)
        })
    }
    containsFiles(){
        return this.props.files !== null && this.props.files.length > 0;
    }
    render() {
        return (
            <div>
                <NotificationStack
                  notifications={this.state.notifications}
                  onDismiss={notification => this.setState({
                    notifications: this.state.notifications.delete(notification)
                  })}
                />
            </div>
        );
    }
}

class FileTransferSend extends Component{
    constructor() {
        super();
        this.cancelUpload = this.cancelUpload.bind(this);
    }
    cancelUpload() {
        console.log('test');
    }
    render(){
        let files = [];
        this.props.files.forEach(function(file){
            files.push(<div key={file.name.toString() + file.lastModified.toString()}><div className="Filename">{file.name}</div><div className="Filesize">{file.size} kb</div></div>);
        })
        return(
            <div className="FileTransfer">
                <h3>Your file transfer</h3>
                <div>
                    <h5>Files</h5>
                    <div className="FilesHolder">
                        {files}
                    </div>
                </div>
                <div className="Recipient">
                    <span>Recipient: </span><span>{this.props.user !== null ? (this.props.user.name + ' ' + this.props.user.img) : 'Not Selected'}</span>
                </div>
            <div className="notification-bar-action"><span>Send File</span> | <span onClick={((this.cancelUpload))}>Cancel</span></div>
            </div>
        )
    }
}

export {NotificationSend};
