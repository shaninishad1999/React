import React, { useState } from 'react'
import Comp1 from './components/Comp1'

const App = () => {
  const [user ,setUser]=useState("Shanideval")
  return (
    <div>
<h1>This App file Welcome : {user}</h1>

<Comp1 user={user}/>

    </div>
  )
}

export default App