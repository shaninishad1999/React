import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Shanideval");
  const myname = () => {
    setName("Shivam");
  };
  const [city, setCity] = useState("Bhopal");
  const mycity = () => {
    setCity("Indore");
  };

  const [color, setColor] = useState("Red");
const [cnt,setCnt]=useState(0)

const myDecrement=()=>{
  if(cnt<=1){
    alert("can not decrement")
  }else{
    setCnt(cnt-1)
  }
}


  return (
    <>

<h1>counter app</h1>

<h2>count : {cnt}</h2>
<button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
<button onClick={myDecrement}>Decrement</button>
<button onClick={()=>{setCnt(0)}}>Reset</button>


      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
        eveniet.
      </h1>
      <h2>My Name is : {name}</h2>
      <button onClick={myname}>Change Name</button>
      <h2>My City is : {city}</h2>
      <button onClick={mycity}>Change City</button>
      <h2 style={{color:color}}>
        My Favourite color is :{color}
      </h2>
      <button
        onClick={() => {
          setColor("Green");
          mycolor;
        }}
      >
       Green
      </button>
      <button
        onClick={() => {
          setColor("Yellow");
          mycolor;
        }}
      >
        Yellow
      </button>
      <button
        onClick={() => {
          setColor("Blue");
          mycolor;
        }}
      >Blue</button>
      <button
        onClick={() => {
          setColor("orange");
          mycolor;
        }}
      >orange</button>
    </>
  );
};

export default App;
