import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./SubscribeBox_Function";
import reportWebVitals from "./reportWebVitals";
import SubscribeBox_Function from "./SubscribeBox_Function";
import NewSubscribe from "./NewSubscribeBox_Function";
import NewSubscribeBoxCustom from "./NewSubscribeBox_custom";

ReactDOM.render(
  <React.StrictMode>
    {/* <SubscribeBox_Function></SubscribeBox_Function> */}
    {/* <NewSubscribe></NewSubscribe> */}
    <NewSubscribeBoxCustom></NewSubscribeBoxCustom>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
