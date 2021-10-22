import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [verticalOffset, setVerticalOffset] = useState(0);
  const [horizontalOffset, setHorizontalOffset] = useState(0);

  const moveBoxUp = () => {
    setVerticalOffset(verticalOffset - 50);
  };

  const moveBoxDown = () => {
    setVerticalOffset(verticalOffset + 50);
  };

  const moveBoxLeft = () => {
    setHorizontalOffset(horizontalOffset - 50);
  };

  const moveBoxRight = () => {
    setHorizontalOffset(horizontalOffset + 50);
  };

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>Move Up</button>
      <button onClick={moveBoxDown}>Move Down</button>
      <button onClick={moveBoxLeft}>Move Left</button>
      <button onClick={moveBoxRight}>Move Right</button>

      {/* move this box using inline styles */}
      <div
        className="box"
        style={{
          transform: `translateX(${horizontalOffset}px) translateY(${verticalOffset}px)`
        }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
