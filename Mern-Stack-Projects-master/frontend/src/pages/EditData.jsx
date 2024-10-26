import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditData = () => {
  const { empid } = useParams();
  const [mydata, setMydata] = useState({}); // Initialize empty object

  const loadData = async () => {
    const api = "http://localhost:8000/employees/employeeeditdata";
    try {
      const response = await axios.post(api, { id: empid });
      setMydata(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Failed to load data. Please try again.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMydata((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:8000/employees/employeeeeditsave";
    try {
      await axios.post(api, mydata);
      alert("Data Updated Successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto mb-5" style={{ maxWidth: "424px" }}>
        <div className="card-header text-center">
          <h4>Edit Employee Data</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Emp No</label>
              <input
                type="text"
                name="empno"
                value={mydata.empno || ""}
                onChange={handleInput}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="empname"
                value={mydata.empname || ""}
                onChange={handleInput}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                name="degignation"
                value={mydata.degignation || ""}
                onChange={handleInput}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                value={mydata.city || ""}
                onChange={handleInput}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                name="salary"
                value={mydata.salary || ""}
                onChange={handleInput}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditData;
