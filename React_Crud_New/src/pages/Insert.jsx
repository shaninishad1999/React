import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
   
  
    const apiUrl = "http://localhost:3000/EmpInfo";
   await axios
      .post(apiUrl, formData)
      .then((res) => {
        console.log(res.data);
        console.log("Form Submitted:", formData);
        alert("Employee Data Submitted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  



  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Insert Employee Information</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formRow}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={styles.input} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={styles.input} required />
        </div>

        <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} style={styles.inputFull} required />

        {/* Email and Phone with equal width */}
        <div style={styles.formRow}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={styles.input} required />
        </div>

        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={styles.inputFull} required />

        <div style={styles.formRow}>
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} style={styles.input} required />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} style={styles.input} required />
          <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} style={styles.input} required />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f4f4",
    padding: "20px",
    boxSizing: "border-box",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "600px",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  formRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1, // Ensures both inputs take equal space
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  inputFull: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
    width: "100%",
    marginTop: "10px",
  },
};

export default Insert;
