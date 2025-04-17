import "./App.css";
// import React from "react";
export default function App() {
  let name = "Ram";
  return (
    <div>
      <h2 className="active">{name}</h2>
      <br />
      <h1>Hello</h1>
    </div>
  );
}

// export default function App() {
//   return React.createElement("h1", { className: "active" }, "Hello");
// }
