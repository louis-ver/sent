import React, { Component } from "react";

class Login extends Component {
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
            this.props.onSubmit(input.value);
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

export default Login;
