import React from 'react'
import { Comp4 } from './Comp4'

export const Comp3 = ({user}) => {
  return (
    <div>
      <h1>componets 3</h1>
     <Comp4 user={user}/>
    </div>
  )
}
export default Comp3
