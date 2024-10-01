import EmpData from "./EmpData"
import EmpDesign from "./EmpDesign"


const App = () => {
  const ans=EmpData.map((key)=><EmpDesign
  rn={key.rollno}
  nm={key.name}
  ct={key.city}
  />)
  return (
    <>
    <>
      <h1>welcom to app page</h1>
      <table cellPadding="20">
        <tr>
          <th>Emp No</th>
          <th>Emp Name</th>
          <th>Emp city</th>
        </tr>
        {ans}
      </table>
    </>
    </>
  )
}

export default App