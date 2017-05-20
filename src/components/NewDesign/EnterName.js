import React from "react";
import { connect } from "react-redux";
import { addUserFromLogin } from "../../actions/index";

const ip = require("ip");

let EnterName = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addUserFromLogin({ name: input.value, ip: ip.address() }));
        }}
      >
        <label>Enter your name:</label>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit" className="hidden" />
      </form>
    </div>
  );
};

EnterName = connect()(EnterName);

export default EnterName;
