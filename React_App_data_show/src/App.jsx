import Design from "./Design"; // Assuming Design component is correctly imported

const student = [
  {
    rollno: "101",
    name: "Shanideval",
    city: "Bhopal",
  },
  {
    rollno: "102",
    name: "Shani",
    city: "Bhopal",
  },
  {
    rollno: "103",
    name: "Deval",
    city: "Bhopal",
  },
  {
    rollno: "104",
    name: "Shanideval",
    city: "Bhopal",
  },
];

const ans = student.map((key, index) => (
  <Design key={index} rno={key.rollno} nm={key.name} cy={key.city} />
));

const App = () => {
  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <table border="1" cellPadding="20">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </>
  );
};

export default App;
