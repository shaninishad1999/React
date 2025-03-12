import React, { useEffect, useState } from "react";

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs only on mount!");
  }, []);

  return (
    <div>
        <h2>Empty Dependency Array using array</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example2;
