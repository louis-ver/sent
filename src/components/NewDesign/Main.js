import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import UserList from "./UserList";
import MainContent from "./MainContent";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <Header />
        <MainContent />
      </div>
    );
  }
}

Main = connect((store, props) => {
  return {};
})(Main);

export default Main;
