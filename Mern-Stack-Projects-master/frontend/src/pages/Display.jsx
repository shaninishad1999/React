import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8000/employees/employeedisplay";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data || "An error occurred while fetching data");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => (
    <tr key={key.empno}>
      <td>{key.empno}</td>
      <td>{key.empname}</td>
      <td>{key.degignation}</td>
      <td>{key.city}</td>
      <td>{key.salary}</td>
    </tr>
  ));

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <center>
          <h4 className="mb-4">Display Employee Records</h4>
        </center>
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
            {ans.length > 0 ? ans : (
              <tr>
                <td colSpan="5" className="text-center">No records found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Display;
