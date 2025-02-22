import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [empno, setEmpno] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!empno.trim()) {
      setError("Please enter an Employee Number.");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(`http://localhost:3000/EmpInfo/${empno}`);
      setData(response.data);
    } catch (err) {
      console.error("Error fetching employee data:", err);
      setError("Employee not found or an error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Employee</h2>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter Employee Number"
          value={empno}
          onChange={(e) => setEmpno(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.button}>Search</button>
      </div>

      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {data && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Last Name</th>
              <th style={styles.th}>Designation</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>{data.firstName}</td>
              <td style={styles.td}>{data.lastName}</td>
              <td style={styles.td}>{data.designation}</td>
              <td style={styles.td}>{data.email}</td>
              <td style={styles.td}>{data.phone}</td>
              <td style={styles.td}>
                {data.address}, {data.city}, {data.state} - {data.zip}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background: "#f4f4f4",
    minHeight: "100vh",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    width: "250px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  message: {
    fontSize: "18px",
    color: "#555",
  },
  error: {
    fontSize: "18px",
    color: "red",
  },
  table: {
    width: "100%",
    maxWidth: "900px",
    borderCollapse: "collapse",
    background: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    overflow: "hidden",
  },
  th: {
    background: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default Search;
