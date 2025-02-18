import React, { use, useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);

  const myvalue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You can't go below 0");
    }
  };
  // this is run on every render

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 3000);
  // });  


  // 2  only run once per render  blank array

// 


//  if value will change then it will be rendered

useEffect(()=>{
  setMulti(count*2)
},[count])


  return (
    <>
      <h1>Your Number, {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={myvalue}>Decrement</button>
      <h2>Your Multiple, {multi}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Multiple</button>
    </>
  );
};

export default App;
