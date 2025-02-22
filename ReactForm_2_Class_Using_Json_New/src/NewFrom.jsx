import axios from "axios";
import { useEffect, useState } from "react";

const NewForm = () => {
  const [input, setInput] = useState({
    name: "",
    city: "",
    contact: "",
    email: "",
  });
  const [data, setData] = useState([]);

  // Load data from API
  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/stuinfo");
      console.log("Fetched Data:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!input.name || !input.city || !input.contact || !input.email) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/stuinfo", input);
      console.log("Data Submitted Successfully:", response.data);
      setInput({ name: "", city: "", contact: "", email: "" }); // Reset form
      loadData(); // Refresh data
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div id="insert">
      <h1>Application Form</h1>
      <label>Enter Name: </label>
      <input type="text" name="name" value={input.name} onChange={handleInput} />
      <br /><br />

      <label>Enter City: </label>
      <input type="text" name="city" value={input.city} onChange={handleInput} />
      <br /><br />

      <label>Enter Contact: </label>
      <input type="text" name="contact" value={input.contact} onChange={handleInput} />
      <br /><br />

      <label>Enter Email: </label>
      <input type="text" name="email" value={input.email} onChange={handleInput} />
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {/* <h2>Student Data:</h2> */}
      {/* {data.length > 0 ? (
        <ul>
          {data.map((student, index) => (
            <li key={student.id || index}>
              {student.name} - {student.city} - {student.contact} - {student.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No student data available.</p>
      )} */}
    </div>
  );
};

export default NewForm;
