import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const myvar = (
  <div>
    <h1 style={{backgroundColor: 'red'}}>Hello{5+5}</h1>
    <p className="para">This is JSX</p>
  </div>
);

// 

root.render(myvar);

// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );
