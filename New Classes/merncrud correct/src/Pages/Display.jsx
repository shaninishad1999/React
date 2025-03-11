import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/Employees";
    const response = await axios.get(api);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = data.map((key) => {
    return (
      <>
        <tr>
          <td>{key.id}</td>
          <td>{key.empname}</td>
          <td>{key.empcity}</td>
          <td>{key.empsalary}</td>
        </tr>
      </>
    );
  });

  return (
    <>
    <center>

      <h1>Display All Data Here</h1>
      <table border="1" cellPadding="20">
        <tr>
          <th>Employee No.</th>
          <th>Emplpyee Name</th>
          <th>Emplpyee Designation</th>
          <th>Emplpyee salary</th>
        </tr>
        {ans}
      </table>
    </center>
    </>
  );
};

export default Display;
