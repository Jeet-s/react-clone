import React from "./react/react";

function Button({ count, setCount, text }) {
  return <button onClick={() => setCount(count + 1)}>{text}</button>;
}

export default function App() {
  let [count, setCount] = React.useState(0);
  return (
    <div id="div">
      {count}
      <Button count={count} setCount={setCount} text={"click"}></Button>
    </div>
  );
}
