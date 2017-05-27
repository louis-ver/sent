import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { addUserFromLogin } from "../actions/index";
import Me from "../classes/me";

// const ip = require("ip");

class EnterName extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let input;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            // Change Redux state to include "me"
            debugger;
            this.props.addUserFromLogin(input.value);
          }}
        >
          <label>Enter your name:</label>
          <input
            ref={node => {
              input = node;
            }}
            autoFocus
            placeholder="John Appleseed"
          />
          <button type="submit" className="hidden" />
        </form>
      </div>
    );
  }
}
// Connect to Redux Store
EnterName = connect()(EnterName);

export default EnterName;
