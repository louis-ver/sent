import React from "react";
import { connect } from "react-redux";
import CEnterName from "../containers/CEnterName";
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
        <CEnterName />
      </div>
    );
  }
}

Welcome = connect((store, props) => {
  return {me : store.me};
})(Welcome);

export default Welcome;
