import React from 'react'
import { Comp3 } from './Comp3'

export const Comp2 = ({user}) => {
  return (
    <div>
      <h1>Comnponents 2</h1>
      <Comp3 user={user}/>

    </div>
  )
}
export default Comp2
