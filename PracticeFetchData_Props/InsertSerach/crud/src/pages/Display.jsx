import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [empdata, setEmpdata] = useState([]);

  const loadData = () => {
    let url = "http://localhost:3000/employees";
    axios.get(url).then((res) => {
      console.log(res.data);
      setEmpdata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = empdata.map((key) => (
    <tr key={key.empno}>
      <td style={{ padding: '10px', textAlign: 'center' }}>{key.empno}</td>
      <td style={{ padding: '10px', textAlign: 'center' }}>{key.name}</td>
      <td style={{ padding: '10px', textAlign: 'center' }}>{key.email}</td>
      <td style={{ padding: '10px', textAlign: 'center' }}>{key.contact}</td>
    </tr>
  ));

  return (
    <>
      <center>
        <h1 style={{ color: "red", marginBottom: "20px" }}>Display Data!</h1>
        <table
          width="90%"
          border="1"
          style={{ borderCollapse: 'collapse', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}
        >
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ padding: '10px', textAlign: 'center' }}>Employee No</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Name</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Email</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Contact</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </center>
    </>
  );
};

export default Display;
