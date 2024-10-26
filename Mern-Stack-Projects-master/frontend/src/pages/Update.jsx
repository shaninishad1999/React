import { useState, useEffect } from "react";
import axios from "axios";
import editIcon from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const api = "http://localhost:8000/employees/employeeupdatedisplay";
    try {
      const response = await axios.get(api);
      console.log("Response data:", response.data); // Log response data
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      alert(error.response?.data || "An error occurred while fetching data");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    const api = "http://localhost:8000/employees/employeedatadelete";
    try {
      await axios.post(api, { id });
      alert("Data Deleted!");
      loadData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`editdata/${id}`);
  };

  const rows = mydata.map((record) => (
    <tr key={record._id}>
      <td>{record.empno}</td>
      <td>{record.empname}</td>
      <td>{record.degignation}</td> {/* Make sure this is correct */}
      <td>{record.city}</td>
      <td>{record.salary}</td>
      <td>
        <a href="#" onClick={(e) => { e.preventDefault(); handleEdit(record._id); }} className="me-2">
          <img src={editIcon} width="20" height="20" alt="Edit" />
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleDelete(record._id); }}>
          <img src={deleteIcon} width="20" height="20" alt="Delete" />
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-fill">
        <center>
          <h4 className="mb-4">Update Employee Records</h4>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Employee No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>City</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? rows : (
                <tr>
                  <td colSpan="6" className="text-center">No records found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </center>
      </div>
    </div>
  );
};

export default Update;
