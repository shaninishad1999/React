import { useState } from "react"

const Form = () => {
    const [name, setName]=useState("")
    const [city, setCity]=useState("")
  return (
    <>
    <h1>Application form</h1>
    Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
    Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/> <br /> <br />
    <button>View Data</button>
    </>
  )
}

export default Form