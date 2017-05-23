import React from "react";
import { connect } from "react-redux";
import EnterName from "./EnterName";
import "./css/Welcome.css";

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
