import React from 'react'
import NavbarTop from '../components/Task_2/NavbarTop'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <NavbarTop/>

    <Outlet/>

    </>
  )
}

export default Layout