import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import HeaderStyles from "./Header.module.css"
import { AuthContext } from '../../context/AuthContext';


const Header = () => {

  const [name, setName] = useState()

  const {token,handleDashboard,handleLogout} = useContext(AuthContext)

  const [isDropdown, setIsDropdown] = useState(false)


  return (
    <header>
      <nav className={HeaderStyles.logoLinks}>
        <Link className={HeaderStyles.logo}>LOGO </Link>
        <div className={HeaderStyles.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className={HeaderStyles.profile}>
            {
              token ? <span>

                <RiAccountCircleLine onClick={() => setIsDropdown(!isDropdown)} />
                {isDropdown &&  <span className={HeaderStyles.dropdown}>
                  <Link onClick={()=>handleDashboard()} to="/admin/dashboard">Dashboard</Link>
                  <Link onClick={()=>handleLogout()}>Logout</Link>
                </span>}

              </span> : <Link to="/login"> Login </Link>
            }
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header