import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
  const [empno, setEmpno] = useState("");
  const [mydata, setMydata] = useState(null); // Initialize as null

  const handleSubmit = async () => {
    const api = "http://localhost:8000/employees/employeesearch";

    // Validate employee number input
    if (!empno) {
      message.error("Please enter an employee number.");
      return;
    }

    try {
      const res = await axios.post(api, { empno: Number(empno) }); // Ensure empno is a number
      console.log("Response Data:", res.data); // Log the response data
      setMydata(res.data); // Set the employee object directly

      // Check if the employee data is empty
      if (!res.data || Object.keys(res.data).length === 0) {
        message.error("No Record Found!");
      }
    } catch (err) {
      console.error("Error:", err.response); // Log the error response
      message.error(err.response?.data?.error || "An error occurred while searching.");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <center>
          <h4>Search Employee Records by ID</h4>
          <input
            type="text"
            placeholder="Enter Employee Number (ID)"
            value={empno}
            onChange={(e) => setEmpno(e.target.value)}
            className="form-control mb-3"
            style={{ maxWidth: "300px" }}
          />
          <button onClick={handleSubmit} className="btn btn-primary mb-4">Search!</button>

          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Employee No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>City</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {mydata ? (
                <tr>
                  <td>{mydata.empno}</td>
                  <td>{mydata.empname}</td>
                  <td>{mydata.designation}</td>
                  <td>{mydata.city}</td>
                  <td>{mydata.salary}</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No records found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </center>
      </div>
    </div>
  );
};

export default Search;
