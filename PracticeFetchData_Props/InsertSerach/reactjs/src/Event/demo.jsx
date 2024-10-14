
// App.jsx
// -------------

// const App=()=>{
//     const display=()=>{
//       alert("This is my event!!");
      
//     }
//     return(
//       <>
      
//       <h1>Welcome To  React Event !!</h1>
//       <button onClick={display}>Click here</button>
//       </>
//     )
//   }
//   export default App;


//   -----------------------------------------------
// const App=()=>{
//     const myName=(nm)=>{
//       alert(`my name is : ${nm}`)
//     }
//     return(
//       <>
//       <h1>
//         <h1>Welcome event!!</h1>
//         <button onClick={()=>{myName("Kamlesh")}}>Click here</button>
//       </h1>
//       </>
//     )
//   }
//   export default App;



// ==================================================================
// Event object:-
// ==================================================================


// const App=()=>{
//     const cybrom=(course,e)=>{
//       alert(`my course:${course}   event object : ${e.type}`);
//     }
//     return(
//       <>
//       <h1>
//         <h1>Welcome event!!</h1>
//         <button onClick={(e)=>{cybrom("fullstack",e)}}>Click here</button>
//       </h1>
//       </>
//     )
//   }
//   export default App;


// ------------------------------------------------------------------------------
// const App=()=>{
//     const myName=(nm,e)=>{
//       let Name=e.target.name;
//       let Val=e.target.value;
//       alert("Name:"+Name+"Value:"+Val);
  
      
//     }
//     return(
//       <>
//       <h1>
//         <h1>Welcome event!!</h1>
//         <button name="btn1"  value= "mybtn" onClick={(e)=>{myName("Ankita",e)}}>Click here</button>
//       </h1>
//       </>
//     )
//   }
//   export default App;

// ---------------------------------------------------------------------------------------


// const App=()=>{
//     const textboxVal=(e)=>{
//       let Name=e.target.name;
//       let Val=e.target.value;
//       alert("Name: "+ Name + " Value: "+ Val);
  
      
//     }
//     return(
//       <>
//       <h1>
//         <h1>Welcome event!!</h1>
//         {/* <button name="btn1"  value= "mybtn" onClick={(e)=>{myName("Ankita",e)}}>Click here</button> */}
//        Enter City : <input type="text" name="City" value="Bhopal"  onClick={textboxVal}/>
//       </h1>
//       </>
//     )
//   }
//   export default App;
  