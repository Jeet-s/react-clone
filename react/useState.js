import render from "./render";
import React from "./react";
import App from "../App.jsx";

let hooksState = [];
let currentStateIndex = 0;

export default function useState(initialValue) {
  console.log("useState", initialValue, currentStateIndex, hooksState);
  if (hooksState[currentStateIndex]) {
    return hooksState[currentStateIndex++];
  }

  let pair = [initialValue, setState];

  function setState(newValue) {
    console.log("setState", newValue);
    if (typeof newValue === "function") {
      pair[0] = newValue(pair[0]);
    } else {
      pair[0] = newValue;
    }

    currentStateIndex = 0;

    document.getElementById("root").innerHTML = "";

    React.render(<App />, document.getElementById("root"));
  }

  hooksState[currentStateIndex] = pair;
  currentStateIndex++;
  return pair;
}
