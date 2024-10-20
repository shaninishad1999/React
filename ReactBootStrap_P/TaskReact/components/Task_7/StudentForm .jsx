import React, { useState } from 'react';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    phy: '',
    che: '',
    math: '',
    eng: '',
    hindi: '',
  });

  const [result, setResult] = useState({
    totalMarks: 0,
    percentage: 0,
    division: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateResults = () => {
    const { phy, che, math, eng, hindi } = formData;
    const totalMarks = parseInt(phy) + parseInt(che) + parseInt(math) + parseInt(eng) + parseInt(hindi);
    const percentage = (totalMarks / 500) * 100;

    let division = '';
    if (percentage >= 60) {
      division = 'First Division';
    } else if (percentage >= 45) {
      division = 'Second Division';
    } else if (percentage >= 33) {
      division = 'Third Division';
    } else {
      division = 'Fail';
    }

    setResult({
      totalMarks,
      percentage,
      division,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults();
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Student Marks Form</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Roll Number */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Roll No:</label>
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleInputChange}
            required
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Name */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Marks for each subject */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Physics:</label>
          <input
            type="number"
            name="phy"
            value={formData.phy}
            onChange={handleInputChange}
            required
            max="100"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Chemistry:</label>
          <input
            type="number"
            name="che"
            value={formData.che}
            onChange={handleInputChange}
            required
            max="100"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Mathematics:</label>
          <input
            type="number"
            name="math"
            value={formData.math}
            onChange={handleInputChange}
            required
            max="100"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>English:</label>
          <input
            type="number"
            name="eng"
            value={formData.eng}
            onChange={handleInputChange}
            required
            max="100"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px' }}>Hindi:</label>
          <input
            type="number"
            name="hindi"
            value={formData.hindi}
            onChange={handleInputChange}
            required
            max="100"
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '10px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: '#28a745',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display Results */}
      {result.totalMarks > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontFamily: 'Arial, sans-serif', color: '#007bff' }}>Results</h3>
          <p style={{ fontSize: '18px' }}>Total Marks: {result.totalMarks} / 500</p>
          <p style={{ fontSize: '18px' }}>Percentage: {result.percentage.toFixed(2)}%</p>
          <p style={{ fontSize: '18px' }}>Division: {result.division}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
