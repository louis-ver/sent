import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";

import Welcome from "./Welcome";
import Main from "./Main";
import "./App.css";

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.me === null && nextProps.me !== null) {
      $(".Welcome").slideToggle("slow", () => {
        $(".Main").slideToggle("slow");
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        <Main />
      </div>
    );
  }
}

App = connect((store, props) => {
  return { me: store.me };
})(App);

export default App;
