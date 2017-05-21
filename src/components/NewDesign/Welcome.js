import React from "react";
import { connect } from "react-redux";
import { Motion, spring } from "react-motion";
import EnterName from "./EnterName";
import "./css/Welcome.css";
import $ from "jquery";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  render() {
    return (
      <div className="Welcome">
        <h1 className="logo">sent</h1>
        <EnterName />
      </div>
    );
  }
}

Welcome = connect((store, props) => {
  return {me : store.me};
})(Welcome);

export default Welcome;
