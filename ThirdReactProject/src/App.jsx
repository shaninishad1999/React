// import Students from "./Students"; // Check the correct path to Students component
// import College from "./College";

// const clgname = "Patel College";
// const seat = "452";
// const add = "Bhopal";

import Cybrom from "./Cybrom";

const Student = {
  rollno: 121,
  name: "Shanideval",
  city: "Bhopal",
  fees: 9999,
};

const App = () => {
  return (
    <>
      <h1>Welcome to New File</h1>

      <Cybrom
        rollno={Student.rollno}
        name={Student.name}
        city={Student.city}
        fees={Student.fees}
      />

      {/* <College clgname={clgname} seat={seat} add={add} /> */}

      {/* <h1>Today is props</h1>
      <h2>props means Properties</h2> */}

      {/* <Students name="shanideval" rollno="452" city="Azamgarh"  /> */}
    </>
  );
};

export default App;
