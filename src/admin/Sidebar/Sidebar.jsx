import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './sidebar.css'
import { FaUsersCog } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoChevronBackCircleSharp } from "react-icons/io5";



const Sidebar = () => {

  const { handleHome } = useContext(AuthContext)
  return (
    <aside className='sidebar'>
      <div className="nav-admin">
        <NavLink to="/admin/dashboard"><FaUsersCog/> Dashboard</NavLink>
        <NavLink to="/admin/usersList"> <MdDashboardCustomize/>  Users</NavLink>
      </div>

      <div className="back-home">
        <Link onClick={handleHome} to="/"><IoChevronBackCircleSharp/> Back to home</Link>

      </div>
    </aside>
  )
}

export default Sidebar