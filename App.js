// const heading = React.createElement(
//   "h1",
//   { id: "head" ,},
//   "Hello World from basic"
// );

import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement(
    "div",
    { id: "parent" },
    //   "Hello World from basic"
    React.createElement(
      "div",
      { id: "child" },[
      React.createElement("h1", { id: "h1" }, "Hello from nested"),
      React.createElement("h1", { id: "h1" }, "Hello from two"),
      ]
    )
  );
  
  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
  
  reactRoot.render(heading);
