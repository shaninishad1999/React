import { useEffect, useState } from "react"
import "../Display/style.css"
import axios from "axios"
const Display = () => {
  const [empdata,setEmpdata]=useState([])
  const loadData=()=>{
    let url="http://localhost:3000/employees";
    axios.get(url).then((res)=>{
      console.log(res.data);
      setEmpdata(res.data)
    })
  }
  useEffect(()=>{
    loadData();
  },[])
  const ans=empdata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.contact}</td>
      </tr>
      </>
    )
  })
  return (
    <>
       <center>
       <h2>This is display page</h2>
     <table width="90%" border="1" style={{textAlign:"center"}}>
        <tr>
          <th>Emp NO</th>
          <th>Emp Name</th>
          <th>Emp Email</th>
          <th>Emp ContactNo</th>
        </tr>
        {ans}
     </table></center>
    </>
  )
}

export default Display