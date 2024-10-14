
// import { useState } from "react";

// App.jsx 
// -------------


// import { useState } from "react";
// const App=()=>{
//   const [name,setName]=useState("Kamlesh");
  
//   const myname=()=>{
//     setName("Ankita")
  
    
//   }
//   return(
//     <>
    
//     <h1>Welcome To  React HOOKs !!</h1>
//     <h1>My name:{name}</h1>
//     <button onClick={myname}>Click here</button>
//     </> 
//   )
// }
// export default App;


// -------------------------------------------------------------------------


// import { useState } from "react";
// const App=()=>{
//   const [city,setCity]=useState("")
//   const display=()=>{
//     setCity("Indore!");
//   }
//   return (
//     <>
//     <h1>My City:{city}</h1>
//     <button onClick={()=>{setCity("Bhopal")}}>Click1</button>
//     <button onClick={display}>Click2</button>
//     </>
//   )
// }
// export default App;

// ---------------------------------------------------------------------------------------
// import { useState } from "react";
// const App=()=>{
//   const [color,setColor]=useState("Red");
  
//   return(
//     <>
    
//     <h1 style={{color:color}}>My favourite color:{color}</h1>
//     <button onClick={()=>{setColor("green")}}>Green</button>
//     <button onClick={()=>{setColor("orange")}}>orange</button>
//     <button onClick={()=>{setColor("aqua")}}>aqua</button>
//     <button onClick={()=>{setColor("blue")}}>blue</button>
//     </> 
//   )
// }
// export default App;

// -------------------------------------------------------------------------------------------



// import { useState } from "react";
// const App=()=>{
// const [cnt,setCnt]=useState(0);
// const myDecrement=()=>{
// if(cnt<=1){
//   alert("No decrese - value")
// }
// else{
//   setCnt(cnt-1)
// }
// }
//   return(
//     <>
//     <center>
//       <h1>Counter App</h1>
//       <h1>Count:{cnt}</h1>
//       <button onClick={()=>{setCnt(cnt+1)}}>+</button>	&nbsp;
//       <button onClick={myDecrement}>-</button>  	&nbsp;
//       <button onClick={()=>{setCnt(0)}}>Reset</button>
//     </center>
//     </>
//   )
// }
// export default App;
// --------------------------------------------------------------------------------------------------------------

// import { useState } from "react";

// const App =()=>{
//   const [name,setName]=useState("");
//   const [city,setCity]=useState("")
//   return(
//     <>
//     <h1>Application Form</h1>
//     Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//     Enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     <button>Submit</button>
//     </>

//   )

// }
// export default App;


// -------------------------------------------------------------------------------
// ================================================================================================
                            //  FORM HANDLING
// ===================================================================================================

// import { useState } from "react";

// const App =()=>{
//   const [name,setName]=useState("");
//   const [city,setCity]=useState("");
//   const handleSubmit=()=>{
//     console.log({stuname:name,stucity:city});
//   }

//   return(
//     <>
//     <center>
//    <h1>Application Form</h1>
//     Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>

//     Enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/>
//     <button onClick={handleSubmit}>Submit</button>
//     </center>
//     </>

//   )

// }
// export default App;

// -----------------------------------------------------------------------------------

// import { useState } from "react";
// const App=()=>{
//   const [input, setInput]=useState({});//input{ }
//   //input={name:"kamlesh",city:"Bhopal",contact:456789,email:"admin@gmail.com"}
//   const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     //console.log({[name]:value})
//     //setInput({[name]:value})
    
//     setInput((values)=>({...values,[name]:value}));
//     console.log(input);
//   }
//   const handleSubmit=()=>{
//     console.log(input);
//   }
//   return(
//     <>
//     <center>
//       <h1>Application Form</h1>
//       Enter name :<input type="text" name="stunm" value={input.stunm} onChange={handleInput}/><br />
//       Enter city :<input type="text" name="city"  value={input.city} onChange={handleInput}/><br />
//       Enter contact :<input type="text" name="conatct" value={input.contact} onChange={handleInput}/><br />
//       Enter email : <input type="text" name="email" value={input.email} onChange={handleInput}/><br />
//       <button onClick={handleSubmit}>Data Save !!!</button>
//     </center>
//     </>
//   )


// }
// export default App;



