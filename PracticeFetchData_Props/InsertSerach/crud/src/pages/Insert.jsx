import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = () => {
    let api = "http://localhost:3000/employees";
    axios.post(api, input).then((res) => {
      console.log(res);
      toast.success("Data Successfully saved!");
    }).catch((err) => {
      console.error("Error saving data", err);
      toast.error("Error saving data");
    });
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Insert Employee Record</h1>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="empno" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>Employee No:</label>
          <input
            type="text"
            name="empno"
            onChange={handleInput}
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
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
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
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
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
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="contact" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
          }}>Contact No:</label>
          <input
            type="text"
            name="contact"
            onChange={handleInput}
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
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '12px 0',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            fontWeight: 'bold',
          }}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Insert;
