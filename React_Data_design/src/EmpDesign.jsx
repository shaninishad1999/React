
const EmpDesign = (props) => {
  return (
    <>
    <tr>
        <td>{props.empNo}</td>
        <td>{props.empName}</td>
        <td>{props.empAge}</td>
        <td>{props.empCity}</td>
        <td>{props.empSalary}</td>
    </tr>
    </>
  )
}

export default EmpDesign