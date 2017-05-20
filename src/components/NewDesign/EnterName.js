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
          onFormSubmit(true);
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

EnterName = connect()(EnterName);

export default EnterName;
