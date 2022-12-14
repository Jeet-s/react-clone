function createElement(...args) {
  console.log(args);
}

/** @jsx createElement */

let el = <div></div>;
console.log(el);
