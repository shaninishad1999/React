import { useEffect } from "react"
import { useState } from "react"
import ReactCounter from "./ReactCounter"
import Form from "./Form"
const App = () => {

  // const [cnt,setcnt]= useState(0)
  const [count,setcount]= useState(0)

  useEffect(()=>{
    // setcount(cnt+1)
    setTimeout(()=>{
      setcount(count+1)

    },1000)
  })
  // },[])

  return (
   <>
   {/* <h1>Counter  use Effect : {cnt}</h1> */}
    <Form/>
   <ReactCounter/>
   <h1>Counter : {count}</h1>
   </>
  )
}

export default App