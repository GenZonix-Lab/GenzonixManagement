import React from 'react'
import { NavLink } from 'react-router'
const Home = () => {
    console.log("hello")
  return (
    <>
    <div align="center">
      <NavLink to={'/package'}><button>Package Team</button></NavLink>
      <NavLink to={'/inventory'}><button>Inventory Team</button></NavLink>
    </div>
    
    <div className="mainPage">
      <h1 align="center">GenZonix <br /> Management System</h1>
    </div>
    </>
    
    
  )
}

export default Home