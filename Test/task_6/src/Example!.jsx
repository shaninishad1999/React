import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component re-rendered!");
  });

  return (
    <div>
        <h2>This is without Dependenciesc</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Example1;
