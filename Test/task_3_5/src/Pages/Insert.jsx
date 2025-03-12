import axios from "axios";
import React, { useState } from "react";
const Insert = () => {
    const [input, setInput] = useState({});


    const handleSubmit = async() => {
      let api = "http://localhost:3000/Employees";
      const response = await axios.post(api,input);
      console.log(response.data);
      setInput(response.data);
      alert("Data Insert Succesfully")
  
    };
    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      setInput((prevState) => ({
          ...prevState,
          [name]: value
      }));
      console.log(input);
      
  };
  
  
    return <>
    <center>
  
    <h1>Here We can Insert Data</h1>
  
    Enter Emp Id <input type="text" name="id"  onChange={handleInput} /> <br /><br />
    Enter Emp Name <input type="text" name="empname" onChange={handleInput} /> <br /><br />
    Enter Emp Designation <input type="text" name="empcity" onChange={handleInput} /> <br /><br />
    Enter Emp Department <input type="text" name="empdepartment" onChange={handleInput} /> <br /><br />
    Enter Emp Basic Salary <input type="text" name="empsalary" onChange={handleInput} /> <br /><br />
  
    <button onClick={handleSubmit}> Submit</button>
    </center>
    
    
    </>;
  };
  
export default Insert