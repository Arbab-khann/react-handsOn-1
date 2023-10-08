import React, { Component } from "react";
import Func2 from "./classcompo";
import Func1 from "./funcompo";

class Display1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <p className="header">Style using function and class component</p>
        <div className="left-container">
          <button
            className="BTN1"
            onClick={() => {
              this.setState({ count: !this.state.count });
            }}
          >
            To see style in func component
          </button>
          <div className="func-div">{this.state.count ? <Func1 /> : null}</div>
        </div>
      </>
    );
  }
}
export { Display1 };

class Display extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        {" "}
        <div className="right-container">
          <button
            className="BTN2"
            onClick={() => {
              this.setState({ count: !this.state.count });
            }}
          >
            To see style in class component
          </button>
          <div className="class-div">{this.state.count ? <Func2 /> : null}</div>
        </div>
      </>
    );
  }
}

export default Display;
