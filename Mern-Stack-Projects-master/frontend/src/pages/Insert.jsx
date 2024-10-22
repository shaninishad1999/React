import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit behavior

    const api = "http://localhost:8000/employees/employeesave";
    axios.post(api, input)
      .then((res) => {
        console.log(res);
        toast.success("Data Successfully saved!");
        setInput({}); // Reset the input fields after submission
      })
      .catch((err) => {
        alert(err.response?.data || "An error occurred!");
      });
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="form-container" style={{ padding: "30px", borderRadius: "10px", backgroundColor: "#f8f9fa", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}>
            <h4 className="text-center mb-4" style={{ color: "#343a40" }}>Employee Details</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmployeeNo">
                <Form.Label>Employee No</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Employee No" 
                  name="empno" 
                  value={input.empno || ''} // Controlled component
                  onChange={handleInput} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmployeeName">
                <Form.Label>Employee's Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Name" 
                  name="empname" 
                  value={input.empname || ''} // Controlled component
                  onChange={handleInput} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDepartment">
                <Form.Label>Designation</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Designation" 
                  name="degignation" 
                  value={input.degignation || ''} // Controlled component
                  onChange={handleInput} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter City" 
                  name="city" 
                  value={input.city || ''} // Controlled component
                  onChange={handleInput} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Salary" 
                  name="salary" 
                  value={input.salary || ''} // Controlled component
                  onChange={handleInput} 
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Save
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Insert;
