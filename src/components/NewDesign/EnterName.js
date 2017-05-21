import React from "react";
import { connect } from "react-redux";
import { addUserFromLogin } from "../../actions/index";

const ip = require("ip");

let EnterName = ({ dispatch, onFormSubmit }) => {
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
          onFormSubmit(true);
          // Change Redux state to include "me"
          dispatch(addUserFromLogin({ name: input.value, ip: ip.address() }));
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
};
// Connect to Redux Store
EnterName = connect()(EnterName);

export default EnterName;
