import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import { connect } from "react-redux";
import $ from "jquery";

import Welcome from "./NewDesign/Welcome";
import Main from "./NewDesign/Main";
import Request from "./NewDesign/Request";
import "./App.css";

class App extends Component {

  componentWillReceiveProps(nextProps){
    if(this.props.me === null && nextProps.me !== null){
      $('.Welcome').slideToggle('slow', () => {
        $('.Main').slideToggle('slow');
      })
    }
  }

  render() {
      return (
        <div className="App">
          <Welcome/>
          <Main/>
          <Request fileName="bob.txt" fileSize={128} />
        </div>
      );
  }
}

App = connect((store, props) => {
  return {me : store.me};
})(App);

export default App;
