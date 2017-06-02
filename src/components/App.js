import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserFromLogin } from "../actions/index";
import Login from "./Login";
import Main from "./Main";
import "./App.css";

class App extends Component {
  render() {
    let me = this.props.me;
    let component = me
      ? <Main me={me.name} />
      : <Login onSubmit={this.props.onSubmit} />;
    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: name => {
      dispatch(addUserFromLogin(name));
    }
  };
};
const mapStateToProps = state => {
  return { me: state.me };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
