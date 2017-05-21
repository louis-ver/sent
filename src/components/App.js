import React, { Component } from "react";
import Welcome from "./NewDesign/Welcome";
import Request from "./NewDesign/Request";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Request fileName="bob.txt" fileSize={128} />
      </div>
    );
  }
}

export default App;
