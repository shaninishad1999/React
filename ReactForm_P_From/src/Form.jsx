import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    <>
      <h1>Application Form</h1>
      Enter Name :{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      Enter City :{" "}
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      Enter State :{" "}
      <input
        type="text"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      /> <br /><br />
      <button type="button">Submit</button>
    </>
  );
};

export default Form;
