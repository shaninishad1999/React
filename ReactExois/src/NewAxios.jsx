import axios from "axios";
import { useEffect, useState } from "react";

const NewAxios = () => {

  const [myData, setData] = useState([]);
  const [error, setError] = useState(null); // State to store error

  const loadData = async () => {
    let api = "http://localhost:3000/students";
    try {
      const res = await axios.get(api);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      setError("Error loading data, please try again later.");
      console.error(err); // Log the error for debugging
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = myData.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Welcome to Cybrom</h1>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if exists */}
      <table border="1">
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {ans.length > 0 ? ans : <tr><td colSpan="4">No data available</td></tr>} {/* Display fallback message if no data */}
        </tbody>
      </table>
    </>
  );
};

export default NewAxios;
