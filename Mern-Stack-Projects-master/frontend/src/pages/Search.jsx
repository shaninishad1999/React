import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Table from 'react-bootstrap/Table';

const Search = () => {
    const [empno, setEmpno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handleSubmit = () => {
        let api = "http://localhost:8000/employees/employeesearch";
        axios.post(api, { empno: empno })
            .then((res) => {
                setMydata(res.data);
                if (res.data.length === 0) {
                    message.error("No Record Found!");
                }
            })
            .catch((err) => {
                message.error(err.response?.data || "An error occurred while searching.");
            });
    };

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
            <div className="flex-fill">
                <center>
                    <h4>Search Employee Records</h4>
                    <input
                        type="text"
                        placeholder="Enter Employee Number"
                        value={empno}
                        onChange={(e) => setEmpno(e.target.value)}
                        style={{ marginBottom: "10px", padding: "5px" }}
                    />
                    <button onClick={handleSubmit} className="btn btn-primary">Search!</button>
                    <br /><br />

                    <Table striped bordered hover responsive>
                        <thead>
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
                </center>
            </div>
        </div>
    );
};

export default Search;
