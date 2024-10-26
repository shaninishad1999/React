import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchByName = () => {
  const [empname, setEmpname] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleInput = async (e) => {
    setEmpname(e.target.value);
    
    // Ensure the API is called only when empname is not empty
    if (e.target.value) {
      const api = `http://localhost:8000/employees/employeesearchbyname/?empname=${e.target.value}`;
      try {
        const res = await axios.get(api);
        console.log(res.data);
        setMydata(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setMydata([]); // Reset data when input is empty
    }
  };

  const ans = mydata.map((key) => (
    <tr key={key.empno}>
      <td>{key.empno}</td>
      <td>{key.empname}</td>
      <td>{key.designation}</td> {/* Ensure correct spelling */}
      <td>{key.city}</td>
      <td>{key.salary}</td>
    </tr>
  ));

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <center>
          <h4 className="mb-4">Search Employee Records</h4>
          <input
            type="text"
            placeholder="Enter Employee Name"
            value={empname}
            onChange={handleInput}
            className="form-control mb-3"
            style={{ maxWidth: "300px" }} // Set max width for input
          />
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Employee No</th>
                <th>Name</th>
                <th>Designation</th> {/* Correct spelling */}
                <th>City</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {ans.length > 0 ? ans : (
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

export default SearchByName;
