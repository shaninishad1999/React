import React, { useRef } from 'react'
import UseRefExample from './UseRefExample';
import NewEx from './NewEx';

const App = () => {
  const myRef=useRef("")
  const changeColor=()=>{
    myRef.current.style.backgroundColor="Red";
  }
  
  return (
    <div>


<button onClick={changeColor}>useref click me</button>

<div ref={myRef} style={{height:"200px",width:"200px",  borderColor:"red",border:"2px solid black",}}>

</div>
<UseRefExample/>
<NewEx/>
    </div>
  )
}

export default App