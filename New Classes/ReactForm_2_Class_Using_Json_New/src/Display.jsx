import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/stuinfo";
    try {
      const response = await axios.get(api);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Student Information:</h2>
      <ul>
        {data.map((student) => (
          <li key={student.id}>
            <strong>Name:</strong> {student.name}, <strong>City:</strong> {student.city}, <strong>Contact:</strong> {student.contact}, <strong>Email:</strong> {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
