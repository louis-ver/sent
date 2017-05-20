import React from "react";
import { Motion, spring } from "react-motion";
import EnterName from "./EnterName";
import "./css/Welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
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
                <EnterName />
              </div>
            </div>
          )}
        </Motion>
      </div>
    );
  }
}

export default Welcome;
