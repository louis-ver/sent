import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainContent from "./MainContent";

class Main extends React.Component {
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
