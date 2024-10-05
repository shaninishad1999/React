import MyCollege from "./MyCollege"

const studentInfo={
  name:"Shanideval",
  rollno:45,
  clgName:"MCRPV University Bhopal",
  clgAdr:"Bisankhedi Bhopal"
}

const App=()=>{
  return(
    <>
    <h1>Welcome!!!!!!!</h1>
    <MyCollege myName={studentInfo.name} myrollno={studentInfo.rollno} myclgName={studentInfo.clgName} myclgAdr={studentInfo.clgAdr}   />
    </>
  )
}

export default App
