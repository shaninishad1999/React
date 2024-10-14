// App.jsx

// import { useState , useEffect } from "react";
// const App=()=>{
//   const [cnt,setCnt]=useState(0);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCnt(cnt+1)
//     },5000);
//   })
//   return(
//     <>
//     <h1>Welcome to cybrom:{cnt}</h1>
//     </>
//   )
// }
// export default App;
// ------------------------------------------------------------------------------------------------
// import { useState, useEffect } from "react";
// const App = () => {
//   const [cnt, setCnt] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCnt(cnt + 1);
//     }, 6000);
//   },[])

//   return (
//     <>
//       <h1>Welcome to cybrom:{cnt}</h1>
//     </>
//   )
// };
// export default App;

// ------------------------------------------------------------------------------------------------
// import {useState, useEffect} from "react"
// const App=()=>{
//   const [cnt,setCnt]=useState(0);
//   const [multi,setMulti]=useState(0)
//   useEffect(()=>{
//     setMulti(cnt*2)
//   } ,[cnt])
//   return(

//   <>
//   <h1>My Count:{cnt}</h1>
//   <h1>Multiplication:{multi}</h1>
//   <button onClick={()=>{setCnt(cnt+1)}}>click here</button>
  
//   </>
//   )
// }
// export default App;
