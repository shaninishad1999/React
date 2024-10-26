const EmpModel=require("../models/employeeModels");

const empDataSave=async(req,res)=>{
    // res.send("Data Save successfully !!")

const {empno, empname, degignation,city, salary}=req.body;
try{
    const Employee=await EmpModel.create({
        empno:empno,
        empname:empname,
        degignation:degignation,
        city:city,
        salary:salary
    })
    console.log("data save!")
    res.status(200).json(Employee);

}
catch(error){
    res.status(404).json("MangoDB Server No Started!!!")
}
}

const empDatadisplay=async(req,res)=>{
    try{
    const Employeedata=await EmpModel.find();
    // console.log("Data Successfully Display!")
    res.status(200).json(Employeedata);

    }
    
    catch(error){
        res.status(404).json("Data from MongoDB not Found!!!")
    }
    
}
const empSearch = async (req, res) => {
  const { empno } = req.body; // Extract empno from the request body

  // Validate empno
  if (!empno || isNaN(empno)) {
      return res.status(400).json({ error: "Employee number must be provided and must be a number." });
  }

  // Convert empno to a number
  const numericEmpno = Number(empno);

  try {
      const employee = await Employee.findOne({ empno: numericEmpno });
      if (!employee) {
          return res.status(404).json({ message: "Employee not found." });
      }
      return res.status(200).json(employee);
  } catch (err) {
      console.error("Database Error:", err); // Log the error to the console
      return res.status(500).json({ error: "An error occurred while searching for the employee." });
  }
};


  
const employeeUpdateDisplay=async(req,res)=>{
    const Data=await EmpModel.find();
    // console.log("Done")
    // res.send("Updated data!!!!")
    res.send(Data);

}
const employeeDataDelete=async(req,res)=>{
   const myid=req.body.id;
   const employee=await EmpModel.findByIdAndDelete(myid);
   console.log("ok")
//    res.send("chal ja")
   res.send("record deleted!!")
}

const employeeEditData=async(req,res)=>{
    const id=req.body.id;
    const empdata=await EmpModel.findById(id);
    // res.send("Done")
    // console.log("Done")
    res.send(empdata)
}
const employeeEditSave=async(req,res)=>{
    const {_id, empno,empname, degignation,city,salary}=req.body;
    const employeedata=await EmpModel.findByIdAndUpdate(_id,{
        empno:empno,
        empname:empname,
        degignation: degignation,
        city:city,
        salary:salary
    })
 res.send("Data Successfully Updated!!")
}
 const employeeSearchByName=async(req,res)=>{

    let empnm=req.query.empname;
    // console.log("ok")
    console.log(req.query.empname);
    // res.send("Hello!!!")
    const docs=await EmpModel.find({empname:{$regex:empnm}});
    console.log(docs)
    res.send(docs);
 }

module.exports={
     empDataSave,
     empDatadisplay,
     empSearch,
     employeeUpdateDisplay,
     employeeDataDelete,
     employeeEditData,
     employeeEditSave,
     employeeSearchByName
}
