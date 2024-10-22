
const EmployeeTable = ({ employees }) => {
  // Ensure employees is an array before checking length
  if (!employees || employees.length === 0) {
    return <p style={{ textAlign: 'center' }}>No employee data available.</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Employee Records</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Basic Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.department}</td>
              <td>{employee.basicSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
