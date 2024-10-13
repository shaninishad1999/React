import { useState } from "react"
import "../Insert/style.css"
import axios from "axios"
import { message } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
const Insert = () => {
    const [input,setInput]=useState({})
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/employees";
        axios.post(api,input).then((res)=>{
            console.log(res)
            message.success("data save successfully 🚀");
            toast.success("Data save succesfully")

        })
    }
  return (
    <>
    <center>
    <h1>Insert Data</h1>
    Enter EmpNo : <input type="text" name="empno" id="empno"onChange={handleInput} /> <br /><br />
    Enter EmpName: <input type="text" name="empname" id="empname" onChange={handleInput} /> <br /><br />
    Enter EmpEmail : <input type="email" name="empemail" id="empemail" onChange={handleInput}/> <br /><br />
    Enter ContactNo : <input type="tel" name="empnumber" id="empnumber" onChange={handleInput} /> <br /><br />

    <button onClick={handleSubmit}>Save</button>
    <ToastContainer/>
    </center>
    </>
  )
}

export default Insert