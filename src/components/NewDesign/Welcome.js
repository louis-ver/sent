import React from "react";
import ReactDOM from "react-dom";
import "./css/Welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    console.log("Form submitted");
  }

  componentWillMount() {
    window.onload = () => {
      document.getElementById("nameInput").focus();
    };
  }

  render() {
    return (
      <div className="Welcome">
        <h1 className="logo">sent</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your name:</label>
          <input
            id="nameInput"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" className="hidden" />
        </form>
      </div>
    );
  }
}

export default Welcome;
