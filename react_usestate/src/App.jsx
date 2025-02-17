import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("Blue")
  const [count, setCount] = useState(0);
// const myvalue = () => {
// setData("Indore");
// }

const mydec = () => {
 if(count<=0){
  alert("You can't go below 0")
 }else{
  setCount(count-1)
 }
}

  return (
    <>
      <h1 style={{color:data}}>Welcome to : {data}</h1>
      <button onClick={()=>{setData("red")}}>click red</button>
      <button onClick={()=>{setData("yellow")}}>click yellow</button>
      <button onClick={()=>{setData("gray")}}>click gray</button>
      <button onClick={()=>{setData("pink")}}>click pink</button>

      <h1>Count : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={mydec}>Decrement</button>
    
    </>
  )
}

export default App
