const name = ["ranju", "manju", "ranjukumar", "main"];
const subject = ["php", "python", "html", "asp", "dotnet"];

const student = [
  {
    rollno: 120,
    name: "sachin",
    city: "Bhopal",
  },
  {
    rollno: 121,
    name: "HuMan",
    city: "Bhopal",
  },
  {
    rollno: 122,
    name: "Shani",
    city: "Bhopal",
  },
  {
    rollno: 122,
    name: "Shani",
    city: "Bhopal",
  },
  {
    rollno: 122,
    name: "Shani",
    city: "Bhopal",
  },
];
const ans = student.map((key) => {
  return (
    <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
      </tr>
    </>
  );
});

const App = () => {
  // const ans = subject.map((key) => <li>{key}</li>);

  // const ans = name.map((key) => {
  //   return (
  //     <>
  //       <h1>{key}</h1>
  //     </>
  //   );
  // });

  // const sub = subject.map((key) => {
  //   return (
  //     <>
  //       <li>{key}</li>
  //     </>
  //   );
  // });

  return (
    <>
      <table border={"2px"}>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
        </tr>
        {ans}
      </table>

      {/* <ol>{sub}</ol>
      <h1>Lorem ipsum dolor sit amet.</h1>

      <h2>{ans}</h2> */}
    </>
  );
};

export default App;
