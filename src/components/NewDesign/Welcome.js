import React from "react";
import { Motion, spring } from "react-motion";
import EnterName from "./EnterName";
import "./css/Welcome.css";
import $ from "jquery";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div className="Welcome">
        <Motion
          style={{
            y: spring(this.state.submitted ? -$(window).height() : 0, {
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
                <EnterName onFormSubmit={this.handleSubmit} />
              </div>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Welcome;
