import React, { Component } from "react";
import "./style.css";
class Func2 extends Component {
  render() {
    return (
      <div
        className="class-div"
        style={{ backgroundColor: " rgb(125, 205, 215)" }}
      >
        <h2>this is created using class component</h2>
        <p className="class-p"> this is done by using external CSS</p>
        <p style={{ color: "blue", fontWeight: "bold" }}>
          this is done by using inline CSS
        </p>
      </div>
    );
  }
}
export default Func2;
