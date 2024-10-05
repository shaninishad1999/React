import { useState } from "react";

const NewForm = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({
      ...values,
      [name]: value
    }));
  };
const handleSubmit=()=>{
    console.log(input)
}
  return (
    <>
      <h1>Application Form</h1>
      Enter Name: <input type="text" name="name" value={input.name} onChange={handleInput} /> <br /> <br />
      Enter City: <input type="text" name="city" value={input.city} onChange={handleInput} /> <br /> <br />
      Enter Contact: <input type="text" name="contact" value={input.contact} onChange={handleInput} /> <br /> <br />
      Enter Email: <input type="text" name="email" value={input.email} onChange={handleInput} /> <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default NewForm;
