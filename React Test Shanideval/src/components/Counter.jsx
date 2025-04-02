import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      alert("Cannot decrement below zero!");
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={decrement}>-</button> &nbsp;
      <button onClick={reset}>Reset</button>&nbsp;
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
