import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [id,setId]=useState("")
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    let api = `http://localhost:3000/Employees?id=${id}`;
    const response = await axios.get(api);
    setData(response.data);
    console.log(response.data);
  };



 

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

      <h1>Search All Data Here</h1>
      <div>

      Enter Emplpyee No: <input type="text" name="id" value={id} onChange={(e)=>{setId(e.target.value)}} />
      <button onClick={handleSearch}>Search</button>
      </div> <br />
      <table border="1" cellPadding="20">
        <tr>
          <th>Employee No.</th>
          <th>Emplpyee Name</th>
          <th>Emplpyee Designation</th>
          <th>Emplpyee salary</th>
        </tr>
        
      {data.length > 0 ? ans : <p>No data found for this employee number.</p>}
      </table>
    </center>
      
    </>
  );
};

export default Search;
