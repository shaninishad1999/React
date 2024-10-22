import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from './EmployeeForm';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch data from the mock JSON Server
  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to add a new employee
  const addEmployee = (newEmployee) => {
    axios.post('http://localhost:3000/employees', newEmployee)  // POST request to save data
      .then((response) => {
        setEmployees([...employees, response.data]);  // Update state with the new employee
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Employee Management System</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default EmployeeManagement;
