import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditData = () => {
  const { id } = useParams(); // Get id from URL
  const navigate = useNavigate();
  const [input, setInput] = useState({}); // Initialize as empty object

  useEffect(() => {
    if (id) {
      let api = `http://localhost:3000/Employees/${id}`;
      axios.get(api).then((res) => {
        if (res.data && Object.keys(res.data).length > 0) {
          setInput(res.data);
        }
      });
    }
  }, [id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    let api = `http://localhost:3000/Employees/${id}`;
    axios.put(api, input).then(() => {
        navigate("/update"); // Redirect after saving
        alert("Data updated Suceesfully")
    });
  };

  return (
    <>
    <center>

      <h2>Edit Employee Data</h2>
      <label>Enter Employee No.:</label>
      <input type="text" name="id" value={input.id || ""} onChange={handleInput} readOnly /> <br /><br />

      <label>Enter Employee Name:</label>
      <input type="text" name="empname" value={input.empname || ""} onChange={handleInput} /> <br /><br />

      <label>Enter Employee City:</label>
      <input type="text" name="empcity" value={input.empcity || ""} onChange={handleInput} /> <br /><br />

      <label>Enter Employee Salary:</label>
      <input type="text" name="empsalary" value={input.empsalary || ""} onChange={handleInput} /> <br /><br />

      <button onClick={handleSave}>Save</button>
    </center>
    </>
  );
};

export default EditData;
