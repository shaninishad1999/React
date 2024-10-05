import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const myDecrement = () => {
    if (count < 1) {
      alert("can not decrement");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PLUSE
      </button>
      <button onClick={myDecrement}>MINUS</button> <br />
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
