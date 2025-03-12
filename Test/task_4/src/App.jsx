import React, { useState } from "react";

const App = () => {
  const [count, setCounter] = useState(0);

  const incrementNumber = () => {
    setCounter(count + 15);
  };
  const decrementNumber = () => {
    setCounter(count - 15);
  };

  return (
    <div>
    <h1>This is Number: {count}</h1>
    <button onClick={incrementNumber}>Increment</button> &nbsp;
    <button onClick={decrementNumber}>Decrement</button>
  </div>
  );
};

export default App;
