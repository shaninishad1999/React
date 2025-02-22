// import { use } from "react"
// import { useState } from "react"

// const Form = () => {
//   const [empno,setEmpno]= useState("")
//     const [name, setName]=useState("")
//     const [city, setCity]=useState("")
//     const [salary, setSalary]=useState("")

//     const handleSubmit=()=>{

//       console.log("Empno : ",empno)
//       console.log("Name : ",name)
//       console.log("City : ",city)
//       console.log("Salary : ",salary)
        
//     }

//   return (
//     <>
//     <h1>Application form</h1>
//     Enter Empno : <input type="number" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/> <br /> <br />
//     Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
//     Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/> <br /> <br />
//     Enter Salary : <input type="number" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/> <br /> <br />
//     <button onClick={handleSubmit}> View Data</button>
//     </>
//   )
// }

// export default Form

import React, { useState } from "react";

const Form = () => {
  const [empno, setEmpno] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = () => {
    const formData = {
      empno,
      name,
      city,
      salary,
    };

    console.log("Submitted Data:", JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <h1>Application Form</h1>
      Enter Empno:{" "}
      <input
        type="number"
        value={empno}
        onChange={(e) => setEmpno(e.target.value)}
      />{" "}
      <br /> <br />
      Enter Name:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      Enter City:{" "}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />{" "}
      <br /> <br />
      Enter Salary:{" "}
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={handleSubmit}>View Data</button>
    </>
  );
};

export default Form;
