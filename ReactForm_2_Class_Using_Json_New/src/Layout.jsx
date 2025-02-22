import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        
        
        
        <Outlet/>
        <p>www.footer.com</p>
        
        </div>
  )
}

export default Layout