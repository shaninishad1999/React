import React, { useContext } from 'react'
import { myContext } from './LoginContext'

const AuthApp = () => {
    const {user,logout}=useContext(myContext)
  return (
    <div>Welcome.............. {user.name}

        <button onClick={()=>{logout()}}>LogOut</button>
    </div>
  )
}

export default AuthApp