import React, { Component } from 'react';
import update from 'react-addons-update';
import {FileZone} from './FileZone.js';
import {UserZone} from './UserZone.js';
import {NotificationSend} from './NotificationSend.js';
import $ from 'jquery';

class Main extends Component {
    constructor(props){
        super(props);
        this.state =
            {send:{
                files: [],
                user: null
            },
            users:[
            {id: 10, img : '😇', name: "Simon"},
                {id: 1, img : '😒', name: "Simon"},
                {id: 2, img : '🔥', name: "Jonny"},
                {id: 3, img : '👻', name: "Louis-Olivier"},
                {id: 4, img : '💣', name: "Olivier"},
                {id: 5, img : '🐍', name: "Simon"},
        ]
        };

        this.filesChanged = this.filesChanged.bind(this);
        this.userChanged = this.userChanged.bind(this);
        this.sendFile = this.sendFile.bind(this);
    }
    render() {

        return (
            <div>
                <div className="Avatar">
                    <span className="Avatar-username">{this.props.user.name}&nbsp;</span>
                    <span className="Avatar-emoticon">{this.props.user.emoticon}</span>
                </div>
                <FileZone onFileChange={this.filesChanged}/>
                <UserZone users={this.state.users} onUserSelect={this.userChanged} selectedUser={this.state.send.user}/>
                <NotificationSend files={this.state.send.files} user={this.state.send.user} sendFile={this.sendFile}/>
            </div>
        );
    }

    filesChanged(files){
        const state = update(this.state.send, {
          files: {$set: files}
        });
        this.setState({send: state});
    }

    userChanged(user){
        const state = update(this.state.send, {
          user: {$set: user}
        });
        this.setState({send: state});
    }

    sendFile(){
            var formdata = new FormData(); //FormData object
            var fileInput = document.getElementById('file');
            //Iterating through each files selected in fileInput
            for (let i = 0; i < this.state.send.files.length; i++) {
                //Appending each file to FormData object
                formdata.append(this.state.send.files[i].name, this.state.send.files[i]);
            }

            //Creating an XMLHttpRequest and sending
            var xhr = new XMLHttpRequest();
            var url = encodeURI('posturl');
            xhr.open('POST', 'http://localhost:5000/upload');
            xhr.send(formdata);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {

                }
                debugger;
            }
    }




}

export {Main};
