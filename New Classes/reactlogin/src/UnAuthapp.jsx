import React, { useContext, useState } from 'react'
import { myContext } from './LoginContext'

const UnAuthapp = () => {
    const [val, setVal]=useState("")
    const {login}=useContext(myContext);
  return (
    <div>

Enter Your Name : <input type='text' value={val} onChange={(e)=>{setVal(e.target.value)}}/>

<button onClick={()=>{login(val)}}>Loign</button>

    </div>
  )
}

export default UnAuthapp