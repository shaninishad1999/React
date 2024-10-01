import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const App = () => {
  const empDataArray = EmpData();

  const showData = empDataArray.map((key) => (
    <EmpDesign
      key={key.empNo}
      empNo={key.empNo}
      empName={key.empName}
      empAge={key.empAge}
      empCity={key.empCity}
      empSalary={key.empSalary}
    />
  ));

  return (
    <>
      <table border="1" cellPadding="20">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Emp Name</th>
            <th>Emp Age</th>
            <th>Emp City</th>
            <th>Emp Salary</th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
    </>
  );
};

export default App;
