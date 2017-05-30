import React, { Component } from "react";
import Header from "./Header";
import "./css/Login.css";

class Login extends Component {
  render() {
    let input;
    return (
      <div className="Login">
        <Header />
        <div className="content">
          <h1 className="logo">sent</h1>
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
      </div>
    );
  }
}

export default Login;
