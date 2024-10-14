// App.jsx
// ---------------
// import { useState, useEffect } from "react";
// import axios from "axios";
// const App = () => {
//   const [mydata, setMydata] = useState([]);
//   const loadData = () => {
//     let api="http://localhost:3000/students";
//     axios.get(api).then((res)=>{
//       setMydata(res.data);
//       console.log(res.data);
//     });
//   };
//   useEffect(()=>{
//     loadData();
//   },[])
//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//       </tr>
//       </>
//     )
//   })

//   return(
//     <>
//     <h1>Welcom to Students</h1>
//     <table border="2px">
//       <tr>
//       <th>Rollno</th>
//       <th>Name</th>
//       <th>City</th>
//       <th>Fees</th>
//       </tr>
//       {ans}
//     </table>

//     </>
//   )
// };
// export default App;


// =====================================================================================
                                //  Use of try and catch 
// =====================================================================================

// import { useState,useEffect } from "react";
// import axios from "axios";
// const App=()=>{
//   const [mydata,setMydata]=useState([]);
//   const loadData=async()=>{
//     let api ="http://localhost:3000/students"; 

//     try {
//         const response=await axios.get(api);
//         setMydata(response.data);
//         console.log(response);
//     }
//     catch(error){
//       console.log("Server not Found !!!");
//     }
//   }
//   useEffect(()=>{
//     loadData();
//   },[]);
   
//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Welcom Students</h1>
//     <table border="2px">
//       <tr>
//         <th>Rollno</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;