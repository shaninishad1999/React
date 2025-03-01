import React from 'react'
import Comp2 from './Comp2'

const Comp1 = ({user}) => {
  return (
    <div>Comp1

        <Comp2 user={user}/>
    </div>
  )
}

export default Comp1