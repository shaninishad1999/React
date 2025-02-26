import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Access navigate function directly

  const loadData = async () => {
    let api = "http://localhost:3000/EmpInfo";
    const response = await axios.get(api);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const myDel = async (id) => {
    let api = `http://localhost:3000/EmpInfo/${id}`;
   const response= await axios.delete(api);
    alert("Employee Data Deleted!");
    loadData();
  };

  const myEdit = (id) => {
    alert(id);
    navigate(`/editdata/${id}`); // Use navigate directly here
  };

  const ans = data.map((key) => (
    <tr key={key.id} style={{ border: "1px solid black" }}>
      <td>{key.firstName}</td>
      <td>{key.lastName}</td>
      <td>{key.designation}</td>
      <td>{key.email}</td>
      <td>{key.phone}</td>
      <td>{key.address}</td>
      <td>{key.address}</td>
      <td>
        <button onClick={() => myDel(key.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => myEdit(key.id)}>Edit</button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1>Updated Table</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Update;
