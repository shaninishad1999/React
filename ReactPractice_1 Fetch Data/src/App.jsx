import Cybrom from "./Cybrom";
import MyCollege from "./MyCollege";

const myname = "Shanideval";
const age = 45;
const salary = 45000.45;
const dep = "BhopalEducationDepartMent";

const studentInfo = {
  myclgName: "Shanideval",
  collegeName: "MCRPV University",
  collegeNumber: 999,
  collegeAddress: "Bhopal MP",
};

const App = () => {
  return (
    <>
      <h1>Welcome!!!</h1>
      <MyCollege
        myname={studentInfo.myclgName}
        myclgName={studentInfo.collegeName}
        clgNumber={studentInfo.collegeNumber}
        adr={studentInfo.collegeAddress}
      />
      <Cybrom name={myname} age={age} salary={salary} dep={dep} />
    </>
  );
};

export default App;
