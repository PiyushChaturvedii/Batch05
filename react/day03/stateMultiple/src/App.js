import { useState } from "react";
import "./App.css";

export default function App() {
  // let count = 0;
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          ADD
        </button>
        <button onClick={handleSub} className="sub">
          Sub
        </button>
        <button onClick={handleReset} className="reset">
          RESET
        </button>
        <p>{count + 3}</p>
      </div>
    </div>
  );
}
