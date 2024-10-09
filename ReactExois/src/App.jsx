import axios from "axios";
import { useEffect, useState } from "react";
import NewAxios from "./NewAxios";

const App = () => {

  const [myData, setData] = useState([])

  const loadData = () => {
    let api = "http://localhost:3000/students";
    axios.get(api).then((res) => {
      setData(res.data)
      console.log(res.data);
    });
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
          {ans} {/* Render the mapped rows here */}
        </tbody>
      </table>
      <>
      <NewAxios/>
      </>
    </>
  );
};

export default App;
