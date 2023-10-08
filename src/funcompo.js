import "./style.css";

function Func1() {
  return (
    <div
      className="func-div"
      style={{ backgroundColor: " rgb(125, 205, 215)" }}
    >
      <h2>this is created using function component</h2>
      <p className="func-p"> this is done by using external CSS</p>
      <p style={{ color: "blue", fontWeight: "bold" }}>
        this is done by using inline CSS
      </p>
    </div>
  );
}

export default Func1;
