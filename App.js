// const heading = React.createElement(
//   "h1",
//   { id: "head" ,},
//   "Hello World from basic"
// );

import React from "react";
import  ReactDOM  from "react-dom";

// const heading = React.createElement(
//     "div",
//     { id: "parent" },
//     //   "Hello World from basic"
//     React.createElement(
//       "div",
//       { id: "child" },[
//       React.createElement("h1", { id: "h1" }, "Hello from nested"),
//       React.createElement("h1", { id: "h1" }, "Hello from two"),
//       ]
//     )
//   );
  

  
  const Title = ()=>{
    return<h1>Hello From functional component</h1>
  }
  
  const Title2 =<h1>Hello From functional component</h1>
  

  const HeadingComponent = ()=>(
      // {} using this we can write any piece of JSX expression in JSX and to render React element we use {Title2} 
    <div>
      <Title/>
      {Title2} 
      <h2>Bye Bye</h2>
      <p>Check</p>
    </div>
  )


  const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
  
  // reactRoot.render(heading);
  reactRoot.render(<HeadingComponent/>);
