import React, { Component } from "react";
import DropZone from "react-dropzone";
import "./css/Dropzone.css";
import filesize from "filesize";

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
       dragOver: false
    };
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleDragEnter(event) {
    this.setState({ dragOver: true });
  }
  handleDragLeave(event) {
    this.setState({ dragOver: false });
  }
  handleDrop(file) {
    this.setState({ dragOver: false });
    this.props.setFile(file);
    console.log(file);
  }
  handleCancel(event) {
    // this.setState({ file: null });
    this.props.setFile(null);
  }
  render() {
    let noFile = this.props.file === null;
    let prompt = noFile ? "Drag file here" : this.props.file[0].name;
    let fileSize = noFile ? null : filesize(this.props.file[0].size);
    let style = this.state.dragOver ? "prompt-active" : "prompt";
    let cancel = noFile ? null : "CANCEL";
    return (
      <DropZone
        disableClick={true}
        multiple={false}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
        className="dropzone"
      >
        <div className={style}>
          {prompt}
          <div className="fileSize">{fileSize}</div>
          <div className="cancel" onClick={this.handleCancel}>{cancel}</div>
        </div>
      </DropZone>
    );
  }
}

export default Dropzone;
