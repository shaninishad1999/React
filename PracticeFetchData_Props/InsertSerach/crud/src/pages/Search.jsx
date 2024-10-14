import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [eno, setEno] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleSubmit = () => {
    let api = `http://localhost:3000/employees/?empno=${eno}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };

  const ans = mydata.map((key) => {
    return (
      <tr key={key.empno}>
        <td style={{ padding: '10px', textAlign: 'center' }}>{key.empno}</td>
        <td style={{ padding: '10px', textAlign: 'center' }}>{key.name}</td>
        <td style={{ padding: '10px', textAlign: 'center' }}>{key.email}</td>
        <td style={{ padding: '10px', textAlign: 'center' }}>{key.contact}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Search Employee Records</h1>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="eno" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>Enter Employee No.:</label>
          <input
            type="text"
            value={eno}
            onChange={(e) => setEno(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Search
          </button>
        </div>
      </div>
      <hr style={{ margin: '20px 0', borderColor: 'green' }} />

      {/* Only show table if data is found */}
      {mydata.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Employee No</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>Contact No</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#ff0000' }}>No records found</p>
      )}
    </>
  );
};

export default Search;
