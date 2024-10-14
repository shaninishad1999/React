// App.jsx

// const name = ["ranju", "anju", "manju", "sanju"];

// const APP = () => {
//   const ans=name.map((key)=>{
//     return(
//       <>

//       <h1>{key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Hello World</h1>
//     {ans}
//     </>
//   )
// };

// export default APP;

// ----------------------------------------------------------
// 1.Method
// ---------------------------------------------------------------
// const APP = () => {
//     const subject = ["php", "oracle", "java", "asp", "html", "pyton"];
//     const ans = subject.map((key) => {
//       return (
//         <>
//           <li>{key}</li>
//         </>
//       );
//     });
//     return (
//       <>
//         <h1>Hello world</h1>
//         <ol>{ans}</ol>
//       </>
//     );
//   };

//   export default APP;

// ---------------------------------------------------------------------------
//  2.Method

// const App = () => {
//     const subject = ["php", "oracle", "java", "asp", "html", "python","React"];
//     const ans = subject.map((key) => <li>{key}</li>);
//     return (
//       <>
//         <h1>Hello World</h1>
//         <ol>{ans}</ol>
//       </>
//     );
//   };
//   export default App;
// -------------------------------------------------------------------------------------

// Used Normal Funtion:
// ----------------------------------------------------------------------------------

// const App = () => {
//     const subject = ["php", "oracle", "java", "asp", "html", "python","Reactjs"];
//     // const ans = subject.map((key) => <li>{key}</li>);
//     const data=subject.map(function(data){
//       return(
//         <>
//         <ul>{data}</ul>
//         </>
//       )
//     })
//     return (
//       <>
//         <h1>Hello World</h1>
//         <ul>{data}</ul>
//       </>
//     );
//   };
//   export default App;

// ------------------------------------------------------------------------------

// const App = () => {
//     const subject = ["php", "oracle", "java", "asp", "html", "python","Reactjs"];
//     // const ans = subject.map((key) => <li>{key}</li>);
//     const ans = subject.map((item) => {
//       return (
//         <>
//           <ol>{item}</ol>
//         </>
//       );
//     });

//     const data=subject.map(function(data){
//       return(
//         <>
//         <li>{data}</li>
//         </>
//       )
//     })
//     return (
//       <>
//         <h1>Hello World</h1>
//         <ol>{ans}</ol>
//         <li>{data}</li>

//       </>
//     );
//   };
//   export default App;

// ====================================================================
// Array of Object:
// =======================================================================
// App.jsx

// const student=[
//      {
//       "rollno":120,
//       "name":"sachin",
//       "city":"Bhoapl"

//      },
//      {
//       "rollno":121,
//       "name":"Kamlesh",
//       "city":"Singrauli"

//      },
//      {
//       "rollno":122,
//       "name":"sani",
//       "city":"Bhoapl"

//      }
// ]
// console.log(student[2].name)
// const App=()=>{
//   return(
//     <>
//     <h1>Hello Engineers</h1>

//     </>
//   )
// }
// export default App;

// -------------------------------------------------------------------------------
// =========================================================================
// Table form of data:
// ===============================================================================

// const student=[
//     {
//      "rollno":120,
//      "name":"sachin",
//      "city":"Bhoapl"

//     },
//     {
//      "rollno":121,
//      "name":"Kamlesh",
//      "city":"Singrauli"

//     },
//     {
//      "rollno":122,
//      "name":"sani",
//      "city":"Bhoapl"

//     }
// ]
// // console.log(student[2].name)

// const ans=student.map((key)=>{
//  return (
//    <>
   
//    <tr>
//      <td>{key.rollno}</td>
//      <td>{key.name}</td>
//      <td>{key.city}</td>
//    </tr>
   
//    </>
//  )
// });

// const App=()=>{
//  return(
//    <>
//    <h1>Hello Engineers</h1>
//    <table border="2">
//      <tr>
//        <th>Rollno</th>
//        <th>Name</th>
//        <th>City</th>
//      </tr>
//      {ans}
//    </table>
   
//    </>
//  )
// }
// export default App;
// ======================================================================
// Map Implimention and Design
// =========================================================================
// App.jsx
// -------------

// import Design from "./Map/Design"
// const Student=[

// {
//   "rollno":121,
//   "name":"Ankita",
//   "city":"Bhopal"
// },

// {
//   "rollno":122,
//   "name":"Nikit",
//   "city":"Bhopal"
// },
// {
//   "rollno":123,
//   "name":"Kamlesh",
//   "city":"Bhopal"
// }

// ]
// const ans=Student.map((key)=><Design  rno={key.rollno}nm={key.name} ct={key.city}/>)
// const App=()=>{
//   return(
//     <>
//     <h1>Welcome Engineer !!!</h1>
//     <table border="1px" cellPadding="20" cellSpacing="30px">
//       <tr>
//         <th >Rollno</th>
//         <th >Name</th>
//         <th >City</th>
//       </tr>
//    {ans}
//     </table>
    
    
//     </>
//   )
// }
// export default App;


// ---------------------------------------------------------------------------------------------
// App.jsx

// import EmpData from "./Map/EmpData";
// import EmpDesign from "./Map/EmpDesign";

// const App = () => {
//   const ans = EmpData.map((key) => (
//     <EmpDesign
//       empno={key.empno}
//       empnm={key.name}
//       dpt={key.dept}
//       sal={key.salary}
//     />
//   ));

//   return (
//     <>
//       <h1>Welcom Developers!!!</h1>
//       <table border="1px">
//         <tr>
//           <th>Emp Number</th>
//           <th>Emp Name</th>
//           <th>Emp dept</th>
//           <th>Emp Salary</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   );
// };
// export default App;







