import React, { Component } from "react";
import DropZone from 'react-dropzone';
import "./css/Dropzone.css";
import filesize from "filesize";

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            dragOver: false
        }
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragLeave= this.handleDragLeave.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDragEnter(event) {
        this.setState({dragOver: true});
    }
    handleDragLeave(event) {
        this.setState({dragOver: false});
    }
    handleDrop(file) {
        this.setState({file: file}, () => {
            // Do stuff with the file here
        });
    }
    render() {
        let prompt = this.state.file === null ? "Drag file here" : this.state.file[0].name;
        let fileSize = this.state.file === null ? "" : filesize(this.state.file[0].size);
        let style = this.state.dragOver ? "prompt-active" : "prompt";
        return(
            <DropZone multiple={false} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className="dropzone">
                    <div className={style}>{prompt}<div className="fileSize">{fileSize}</div></div>
            </DropZone>
        )
    }
}

export default Dropzone;