import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUserFromLogin } from "../../actions/index";

const ip = require("ip");

class EnterName extends Component {
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
            // Sets Welcome state as "submitted: true"
            this.props.onFormSubmit(true);
            // Change Redux state to include "me"
            this.props.dispatch(
              addUserFromLogin({ name: input.value, ip: ip.address() })
            );
          }}
        >
          <label>Enter your name:</label>
          <input
            ref={node => {
              input = node;
            }}
            autoFocus
          />
          <button type="submit" className="hidden" />
        </form>
      </div>
    );
  }
}
// Connect to Redux Store
EnterName = connect()(EnterName);

EnterName.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

export default EnterName;
