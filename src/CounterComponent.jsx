import React, { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{ margin: 50, textAlign: "left" }}>
      <h1>Counter App</h1>
      <div>Count: {counter}</div>
      <br clear="all" />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
