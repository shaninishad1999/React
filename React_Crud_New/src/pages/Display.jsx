import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/EmpInfo");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load employee data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Employee Information</h2>

      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && data.length === 0 && <p style={styles.message}>No Employee Data Available</p>}

      {!loading && data.length > 0 && (
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
            {data.map((employee, index) => (
              <tr key={index}>
                <td style={styles.td}>{employee.firstName}</td>
                <td style={styles.td}>{employee.lastName}</td>
                <td style={styles.td}>{employee.designation}</td>
                <td style={styles.td}>{employee.email}</td>
                <td style={styles.td}>{employee.phone}</td>
                <td style={styles.td}>
                  {employee.address}, {employee.city}, {employee.state} - {employee.zip}
                </td>
              </tr>
            ))}
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

export default Display;
