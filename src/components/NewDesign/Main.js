import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserList from "./UserList"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <Header />
        <UserList/>
      </div>
    );
  }
}

Main = connect((store, props) => {
  return {};
})(Main);

export default Main;
