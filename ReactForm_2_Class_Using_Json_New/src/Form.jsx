import { useState } from "react";
// we can not handle multiple input section using  so  go to NewFrom
const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const submitForm = () => {
    console.log({ stuname: name, stucity: city });
  };

  return (
    <>
      <h1>Application form</h1>
      Enter Name :{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      Enter City :{" "}
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <button onClick={submitForm}>Submit</button>
    </>
  );
};

export default Form;
