import React from "react";
import { Motion, spring } from "react-motion";
import "./css/Welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  componentWillMount() {
    window.onload = () => {
      document.getElementById("nameInput").focus();
    };
  }

  render() {
    return (
      <div className="Welcome">
        <Motion
          style={{
            y: spring(this.state.submitted ? -600 : 0, {
              stiffness: 80,
              damping: 20
            })
          }}
        >
          {({ y }) => (
            <div className="animated">
              <div
                className="animated-block"
                style={{
                  WebkitTransform: `translate3d(0, ${y}px, 0)`,
                  transform: `translate3d(0, ${y}px, 0)`
                }}
              >
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
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Welcome;
