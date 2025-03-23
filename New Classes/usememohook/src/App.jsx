import React, { useState, useMemo } from 'react';
import NewApp from './NewApp';

const App = () => {
  const [count, setCount] = useState(0);
  const [mysub, setMySub] = useState(100);

  // useMemo to compute the multiplied value without unnecessary recalculations
  // const multipliedCount = useMemo(() => {
  //   console.log("Calculating multiplied count...");
  //   return count * 2;
  // }, [count]);
  const multipliedCount = () => {
    console.log("Calculating multiplied count...");
    return count * 2;
  };




  return (
    <div>
      <h1>Welcome to Here</h1>
      <p>Count: {count}</p>
      <p>Multiplied Count (Memoized): {multipliedCount()}</p>  // this is problem to resoleve we use
      <p>Multiplied Count (Memoized): {multipliedCount}</p>  // this is problem to resoleve we use
      <p>MySub: {mysub}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMySub(mysub - 1)}>Decrement MySub</button>


      <NewApp/>
    </div>
  );
};

export default App;
