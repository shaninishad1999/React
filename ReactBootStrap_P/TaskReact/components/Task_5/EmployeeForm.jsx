import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    empId: '',
    name: '',
    designation: '',
    department: '',
    basicSalary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Record:', employee);
    alert('Employee Record Submitted!');
    
    // Clear form after submission
    setEmployee({
      empId: '',
      name: '',
      designation: '',
      department: '',
      basicSalary: ''
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Makes the form vertically centered within the viewport
      }}
    >
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Insert Employee Record</h2>
        <form onSubmit={handleSubmit}>
          {/* Employee ID */}
          <div>
            <label>Employee ID: </label>
            <input
              type="text"
              name="empId"
              value={employee.empId}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>

          {/* Name */}
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>

          {/* Designation */}
          <div>
            <label>Designation: </label>
            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>

          {/* Department */}
          <div>
            <label>Department: </label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>

          {/* Basic Salary */}
          <div>
            <label>Basic Salary: </label>
            <input
              type="number"
              name="basicSalary"
              value={employee.basicSalary}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
