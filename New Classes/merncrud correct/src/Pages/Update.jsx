import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {

  const [data, setData] = useState([]);
  const navigate=useNavigate();

  const loadData = async () => {
    let api = "http://localhost:3000/Employees";
    const response = await axios.get(api);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    let api = `http://localhost:3000/Employees/${id}`;
    await axios.delete(api);
    await loadData();
    alert("Deleted successfully");
    console.log("Employee deleted:", id);
  };
  
  const editData = (id) => {
    navigate(`/edit/${id}`);
  };



  const ans = data.map((key) => {
    return (
      <>
        <tr key={key.id}>
          <td>{key.id}</td>
          <td>{key.empname}</td>
          <td>{key.empcity}</td>
          <td>{key.empsalary}</td>
          <button onClick={()=>{handleDelete(key.id)}}>Delete</button> &nbsp;
          <button onClick={()=>{editData(key.id)}}>Edit</button>
        </tr>
      </>
    );
  });

  return (
    <>
    <center>

      <h1>Update All Data Here</h1>
      <table border="1" cellPadding="20">
        <tr>
          <th>Employee No.</th>
          <th>Emplpyee Name</th>
          <th>Emplpyee Designation</th>
          <th>Emplpyee salary</th>
          <th>Action Button</th>
        </tr>
        {ans}
      </table>
    </center>
    </>
  );
};

export default Update;
